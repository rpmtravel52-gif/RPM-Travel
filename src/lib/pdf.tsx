import React from 'react';
import {
  Document, Page, Text, View, StyleSheet, Font,
} from '@react-pdf/renderer';
import type { Order } from './types';
import { formatRupiah } from './packages';

// Register a clean font
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc9.ttf', fontWeight: 700 },
  ],
});

const BLUE = '#0284c7';
const NAVY = '#0a1628';
const GRAY = '#6b7280';
const LIGHT = '#f0f9ff';

const styles = StyleSheet.create({
  page: { fontFamily: 'Helvetica', fontSize: 10, color: NAVY, padding: 40 },
  // Header
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 },
  brandBlock: { flexDirection: 'column' },
  brandName: { fontSize: 20, fontWeight: 700, color: BLUE },
  brandSub: { fontSize: 9, color: GRAY, marginTop: 2 },
  docTypeBlock: { alignItems: 'flex-end' },
  docType: { fontSize: 16, fontWeight: 700, color: BLUE, textTransform: 'uppercase' },
  docNumber: { fontSize: 9, color: GRAY, marginTop: 4 },
  // Divider
  divider: { borderBottomWidth: 2, borderBottomColor: BLUE, marginVertical: 12 },
  thinDivider: { borderBottomWidth: 0.5, borderBottomColor: '#e5e7eb', marginVertical: 8 },
  // Info grid
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  infoBlock: { flexDirection: 'column', width: '48%' },
  infoLabel: { fontSize: 8, color: GRAY, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 },
  infoValue: { fontSize: 11, fontWeight: 700, color: NAVY },
  // Table
  tableHeader: { flexDirection: 'row', backgroundColor: BLUE, padding: '8 10', borderRadius: 4 },
  tableHeaderText: { color: 'white', fontWeight: 700, fontSize: 9 },
  tableRow: { flexDirection: 'row', padding: '7 10', borderBottomWidth: 0.5, borderBottomColor: '#e5e7eb' },
  tableRowAlt: { flexDirection: 'row', padding: '7 10', backgroundColor: LIGHT, borderBottomWidth: 0.5, borderBottomColor: '#e5e7eb' },
  col1: { width: '50%' },
  col2: { width: '20%', textAlign: 'center' },
  col3: { width: '15%', textAlign: 'right' },
  col4: { width: '15%', textAlign: 'right' },
  // Total
  totalBox: { marginTop: 12, alignItems: 'flex-end' },
  totalRow: { flexDirection: 'row', justifyContent: 'flex-end', gap: 20, marginBottom: 4 },
  totalLabel: { fontSize: 10, color: GRAY, width: 100, textAlign: 'right' },
  totalValue: { fontSize: 10, width: 120, textAlign: 'right' },
  grandTotalBox: { backgroundColor: BLUE, padding: '8 12', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', width: 240, marginTop: 4 },
  grandTotalLabel: { color: 'white', fontWeight: 700, fontSize: 11 },
  grandTotalValue: { color: 'white', fontWeight: 700, fontSize: 11 },
  // Payment info
  payBox: { marginTop: 20, backgroundColor: LIGHT, padding: 14, borderRadius: 6, borderLeftWidth: 3, borderLeftColor: BLUE },
  payTitle: { fontSize: 9, fontWeight: 700, color: BLUE, marginBottom: 6, textTransform: 'uppercase' },
  payText: { fontSize: 9, color: NAVY, marginBottom: 3 },
  // Watermark
  watermark: { position: 'absolute', top: '40%', left: '15%', fontSize: 72, fontWeight: 700, color: '#16a34a', opacity: 0.12, transform: 'rotate(-35deg)' },
  // Footer
  footer: { marginTop: 30, borderTopWidth: 0.5, borderTopColor: '#e5e7eb', paddingTop: 10 },
  footerText: { fontSize: 8, color: GRAY, textAlign: 'center' },
  // Status badge
  paidBadge: { backgroundColor: '#dcfce7', color: '#15803d', fontSize: 9, fontWeight: 700, padding: '3 8', borderRadius: 3 },
});

// ── INVOICE / FAKTUR ─────────────────────────────────────────────
export function InvoiceDocument({ order }: { order: Order }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandBlock}>
            <Text style={styles.brandName}>RPM Travel Curup</Text>
            <Text style={styles.brandSub}>Jl. S. Parman, Talang Benih, Curup, Bengkulu 39119</Text>
            <Text style={styles.brandSub}>WA: 0852-8282-8005</Text>
          </View>
          <View style={styles.docTypeBlock}>
            <Text style={styles.docType}>Faktur Tagihan</Text>
            <Text style={styles.docNumber}>No. {order.orderNumber}</Text>
            <Text style={styles.docNumber}>Tgl. {new Date(order.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Customer & Trip info */}
        <View style={styles.infoRow}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Kepada Yth.</Text>
            <Text style={styles.infoValue}>{order.nama}</Text>
            {order.email ? <Text style={{ fontSize: 9, color: GRAY, marginTop: 2 }}>{order.email}</Text> : null}
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Jatuh Tempo</Text>
            <Text style={styles.infoValue}>Sebelum Keberangkatan</Text>
            <Text style={{ fontSize: 9, color: GRAY, marginTop: 2 }}>
              Status: <Text style={{ color: '#f59e0b', fontWeight: 700 }}>BELUM BAYAR</Text>
            </Text>
          </View>
        </View>

        {/* Table */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.col1]}>Deskripsi</Text>
          <Text style={[styles.tableHeaderText, styles.col2]}>Pax</Text>
          <Text style={[styles.tableHeaderText, styles.col3]}>Harga/Pax</Text>
          <Text style={[styles.tableHeaderText, styles.col4]}>Subtotal</Text>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.col1}>
            <Text style={{ fontWeight: 700 }}>{order.paket}</Text>
            <Text style={{ color: GRAY, fontSize: 9 }}>
              Tgl. {new Date(order.tanggal).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
            </Text>
          </View>
          <Text style={[styles.col2, { textAlign: 'center' }]}>{order.jumlahPax}</Text>
          <Text style={[styles.col3, { textAlign: 'right' }]}>{formatRupiah(order.hargaPerPax)}</Text>
          <Text style={[styles.col4, { textAlign: 'right', fontWeight: 700 }]}>{formatRupiah(order.totalHarga)}</Text>
        </View>

        {/* Total */}
        <View style={styles.totalBox}>
          <View style={styles.grandTotalBox}>
            <Text style={styles.grandTotalLabel}>TOTAL</Text>
            <Text style={styles.grandTotalValue}>{formatRupiah(order.totalHarga)}</Text>
          </View>
        </View>

        {/* Payment instruction */}
        <View style={styles.payBox}>
          <Text style={styles.payTitle}>Instruksi Pembayaran</Text>
          {order.metodePembayaran === 'QRIS' ? (
            <>
              <Text style={styles.payText}>• Metode: QRIS</Text>
              <Text style={styles.payText}>• Scan QR Code yang telah dikirimkan oleh admin</Text>
              <Text style={styles.payText}>• Pastikan nominal sesuai: {formatRupiah(order.totalHarga)}</Text>
              <Text style={styles.payText}>• Screenshot bukti pembayaran & kirim ke WA Admin: 0852-8282-8005</Text>
            </>
          ) : (
            <>
              <Text style={styles.payText}>• Metode: Tunai</Text>
              <Text style={styles.payText}>• Bayar langsung kepada sopir/agen RPM Travel saat keberangkatan</Text>
              <Text style={styles.payText}>• Simpan faktur ini sebagai referensi pesanan Anda</Text>
            </>
          )}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Dokumen ini diterbitkan secara otomatis oleh sistem RPM Travel Curup.
            Hubungi kami di 0852-8282-8005 untuk pertanyaan.
          </Text>
        </View>
      </Page>
    </Document>
  );
}

// ── E-TICKET / KWITANSI ──────────────────────────────────────────
export function TicketDocument({ order }: { order: Order }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Watermark */}
        <Text style={styles.watermark}>LUNAS</Text>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandBlock}>
            <Text style={styles.brandName}>RPM Travel Curup</Text>
            <Text style={styles.brandSub}>Jl. S. Parman, Talang Benih, Curup, Bengkulu 39119</Text>
            <Text style={styles.brandSub}>WA: 0852-8282-8005</Text>
          </View>
          <View style={styles.docTypeBlock}>
            <Text style={styles.docType}>E-Ticket / Kwitansi</Text>
            <Text style={styles.docNumber}>No. {order.orderNumber}</Text>
            <Text style={styles.docNumber}>
              Lunas: {order.paidAt
                ? new Date(order.paidAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
                : '-'}
            </Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Paid badge */}
        <View style={{ marginBottom: 12 }}>
          <Text style={styles.paidBadge}>✓ PEMBAYARAN LUNAS</Text>
        </View>

        {/* Info */}
        <View style={styles.infoRow}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Nama Penumpang</Text>
            <Text style={styles.infoValue}>{order.nama}</Text>
            {order.email ? <Text style={{ fontSize: 9, color: GRAY, marginTop: 2 }}>{order.email}</Text> : null}
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Tanggal Keberangkatan</Text>
            <Text style={styles.infoValue}>
              {new Date(order.tanggal).toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
            </Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Paket Perjalanan</Text>
            <Text style={styles.infoValue}>{order.paket}</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Jumlah Penumpang</Text>
            <Text style={styles.infoValue}>{order.jumlahPax} Orang</Text>
          </View>
        </View>

        <View style={styles.thinDivider} />

        {/* Table */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.col1]}>Deskripsi</Text>
          <Text style={[styles.tableHeaderText, styles.col2]}>Pax</Text>
          <Text style={[styles.tableHeaderText, styles.col3]}>Harga/Pax</Text>
          <Text style={[styles.tableHeaderText, styles.col4]}>Total</Text>
        </View>
        <View style={styles.tableRowAlt}>
          <Text style={[styles.col1, { fontWeight: 700 }]}>{order.paket}</Text>
          <Text style={[styles.col2, { textAlign: 'center' }]}>{order.jumlahPax}</Text>
          <Text style={[styles.col3, { textAlign: 'right' }]}>{formatRupiah(order.hargaPerPax)}</Text>
          <Text style={[styles.col4, { textAlign: 'right', fontWeight: 700 }]}>{formatRupiah(order.totalHarga)}</Text>
        </View>

        <View style={styles.totalBox}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Metode Bayar</Text>
            <Text style={styles.totalValue}>{order.metodePembayaran}</Text>
          </View>
          <View style={styles.grandTotalBox}>
            <Text style={styles.grandTotalLabel}>TOTAL DIBAYAR</Text>
            <Text style={styles.grandTotalValue}>{formatRupiah(order.totalHarga)}</Text>
          </View>
        </View>

        {/* Notice */}
        <View style={[styles.payBox, { borderLeftColor: '#16a34a', backgroundColor: '#f0fdf4', marginTop: 20 }]}>
          <Text style={[styles.payTitle, { color: '#15803d' }]}>Petunjuk Perjalanan</Text>
          <Text style={styles.payText}>• Harap berada di titik penjemputan 15 menit sebelum waktu keberangkatan.</Text>
          <Text style={styles.payText}>• Tunjukkan e-ticket ini kepada sopir atau agen RPM Travel.</Text>
          <Text style={styles.payText}>• Informasi sopir & waktu jemput akan dikirimkan via WhatsApp sehari sebelum keberangkatan.</Text>
          <Text style={styles.payText}>• Hubungi admin jika ada pertanyaan: 0852-8282-8005</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Dokumen ini adalah bukti pembayaran yang sah dari RPM Travel Curup.
            Terima kasih telah mempercayakan perjalanan Anda kepada kami.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
