/**
 * Converts a static QRIS string to a dynamic one with a specific amount.
 * Based on EMVCo QRIS specification used in Indonesia.
 *
 * Static QRIS tag 26 contains merchant account info.
 * Dynamic QRIS uses tag 54 for transaction amount.
 * We also flip tag 01 from "11" (static) to "12" (dynamic).
 */

export function staticToDynamic(staticQris: string, amount: number): string {
  // 1. Change tag 01 from static (11) to dynamic (12)
  let dynamic = staticQris.replace('010211', '010212');

  // 2. Remove old CRC (last 8 chars: "6304XXXX")
  dynamic = dynamic.slice(0, -8);

  // 3. Insert tag 54 (transaction amount) before tag 58 (country code)
  const amountStr = String(Math.round(amount));
  const amountLen = String(amountStr.length).padStart(2, '0');
  const tag54 = `54${amountLen}${amountStr}`;

  // Insert before "5802ID" (country code tag)
  dynamic = dynamic.replace('5802ID', `${tag54}5802ID`);

  // 4. Recalculate CRC-16/CCITT-FALSE
  dynamic += '6304';
  const crc = crc16(dynamic);
  dynamic += crc.toString(16).toUpperCase().padStart(4, '0');

  return dynamic;
}

function crc16(data: string): number {
  let crc = 0xffff;
  for (let i = 0; i < data.length; i++) {
    crc ^= data.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if (crc & 0x8000) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc <<= 1;
      }
      crc &= 0xffff;
    }
  }
  return crc;
}
