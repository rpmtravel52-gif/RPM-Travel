import Redis from 'ioredis';

declare global {
  // eslint-disable-next-line no-var
  var _redis: Redis | undefined;
}

function getRedis(): Redis {
  if (!global._redis) {
    const url = process.env.REDIS_URL;
    if (!url) throw new Error('REDIS_URL environment variable is not set');
    global._redis = new Redis(url, { maxRetriesPerRequest: 3 });
  }
  return global._redis;
}

export const redis = getRedis();

// ── Order helpers ──────────────────────────────────────────────
import type { Order } from './types';

const PREFIX = 'rpm:order:';
const INDEX  = 'rpm:orders:index'; // sorted set by createdAt score

export async function saveOrder(order: Order): Promise<void> {
  const score = new Date(order.createdAt).getTime();
  await redis
    .multi()
    .set(`${PREFIX}${order.id}`, JSON.stringify(order))
    .zadd(INDEX, score, order.id)
    .exec();
}

export async function getOrder(id: string): Promise<Order | null> {
  const raw = await redis.get(`${PREFIX}${id}`);
  return raw ? (JSON.parse(raw) as Order) : null;
}

export async function updateOrder(order: Order): Promise<void> {
  await redis.set(`${PREFIX}${order.id}`, JSON.stringify(order));
}

export async function listOrders(limit = 100): Promise<Order[]> {
  // newest first
  const ids = await redis.zrevrange(INDEX, 0, limit - 1);
  if (!ids.length) return [];
  const pipeline = redis.pipeline();
  ids.forEach((id) => pipeline.get(`${PREFIX}${id}`));
  const results = await pipeline.exec();
  return (results ?? [])
    .map((r) => (r && r[1] ? (JSON.parse(r[1] as string) as Order) : null))
    .filter(Boolean) as Order[];
}

export async function getNextOrderNumber(): Promise<string> {
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const key = `rpm:counter:${today}`;
  const seq = await redis.incr(key);
  await redis.expire(key, 86400 * 2); // keep 2 days
  return `RPM-${today}-${String(seq).padStart(3, '0')}`;
}
