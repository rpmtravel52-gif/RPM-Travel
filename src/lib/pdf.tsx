import React from 'react';
import {
  Document, Page, Text, View, StyleSheet,
} from '@react-pdf/renderer';
import type { Order } from './types';
import { formatRupiah } from './packages';

const BLUE  = '#0284c7';
const NAVY  = '#0a1628';
const GRAY  = '#6b7280';
const LIGHT = '#e0f2fe';
const GREEN = '#16a34a';

const s = StyleSheet.create({
  page:         { fontSize: 10, color: NAVY, padding: 40, fontFamily: 'Helvetica' },
  header:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
  brandName:    { fontSize: 18, fontFamily: 'Helvetica-Bold', color: BLUE },
  brandSub:     { fontSize: 9, color: GRAY, marginTop: 3 },
  docTypeWrap:  { alignItems: 'flex-end' },
  docType:      { fontSize: 14, fontFamily: 'Helvetica-Bold', color: BLUE },
  docNumber:    { fontSize: 9, color: GRAY, marginTop: 4 },
  divider:      { borderBottomWidth: 2, borderBottomColor: BLUE, marginVertical: 12 },
  thinDiv:      { borderBottomWidth: 0.5, borderBottomColor: '#e5e7eb', marginVertical: 8 },
  infoRow:      { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 14 },
  infoBlock:    { width: '48%' },
  infoLabel:    { fontSize: 8, color: GRAY, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 },
  infoValue:    { fontSize: 11, fontFamily: 'Helvetica-Bold' },
  infoSub:      { fontSize: 9, color: GRAY, marginTop: 2 },
  thRow:        { flexDirection: 'row', backgroundColor: BLUE, padding: '8 10', borderRadius: 4 },
  thText:       { color: 'white', fontFamily: 'Helvetica-Bold', fontSize: 9 },
  tdRow:        { flexDirection: 'row', padding: '7 10', borderBottomWidth: 0.5, borderBottomColor: '#e5e7eb' },
  tdRowAlt:     { flexDirection: 'row', padding: '7 10', backgroundColor: LIGHT },
  c1: { width: '50%' }, c2: { width: '20%', textAlign: 'center' },
  c3: { width: '15%', textAlign: 'right' }, c4: { width: '15%', textAlign: 'right' },
  totalBox:     { marginTop: 12, alignItems: 'flex-end' },
  grandBox:     { backgroundColor: BLUE, padding: '8 12', borderRadius: 4, flexDirection: 'row', justifyContent: 'space-between', width: 260, marginTop: 4 },
  grandText:    { color: 'white', fontFamily: 'Helvetica-Bold', fontSize: 11 },
  payBox:       { marginTop: 18, backgroundColor: LIGHT, padding: 12, borderRadius: 6, borderLeftWidth: 3, borderLeftColor: BLUE },
  payTitle:     { fontSize: 9, fontFamily: 'Helvetica-Bold', color: BLUE, marginBottom: 5, textTransform: 'uppercase' },
  payText:      { fontSize: 9, color: NAVY, marginBottom: 3, lineHeight: 1.5 },
  watermark:    { position: 'absolute', top: '35%', left: '5%', fontSize: 90, fontFamily: 'Helvetica-Bold', color: GREEN, opacity: 0.08, transform: 'rotate(-35deg)' },
  paidBadge:    { backgroundColor: '#dcfce7', color: GREEN, fontSize: 9, fontFamily: 'Helvetica-Bold', padding: '4 10', borderRadius: 3, marginBottom: 14 },
  footer:       { position: 'absolute', bottom: 30, left: 40, right: 40, borderTopWidth: 0.5, borderTopColor: '#e5e7eb', paddingTop: 8 },
  footerText:   { fontSize: 8, color: GRAY, textAlign: 'center' },
});

function fmtDate(iso: string, opts?: Intl.DateTimeFormatOptions) {
  return new Date(iso).toLocaleDateString('id-ID', opts ?? { day: '2-digit', month: 'long', year: 'numeric' });
}

export function InvoiceDocument({ order }: { order: Order }) {
  return (
    <Document title={`Faktur ${order.orderNumber}`} author="RPM Travel Curup">
      <Page size="A4" style={s.page}>
        <View style={s.header}>
          <View>
            <Text style={s.brandName}>RPM Travel Curup</Text>
            <Text style={s.brandSub}>Jl. S. Parman, Talang Benih, Curup, Bengkulu 39119</Text>
            <Text style={s.brandSub}>WhatsApp: 0852-8282-8005</Text>
          </View>
          <View style={s.docTypeWrap}>
            <Text style={s.docType}>FAKTUR TAGIHAN</Text>
            <Text style={s.docNumber}>No. {order.orderNumber}</Text>
            <Text style={s.docNumber}>Tgl. {fmtDate(order.createdAt)}</Text>
          </View>
        </View>
        <View style={s.divider} />
        <View style={s.infoRow}>
          <View style={s.infoBlock}>
            <Text style={s.infoLabel}>Kepada Yth.</Text>
            <Text style={s.infoValue}>{order.nama}</Text>
            {order.email ? <Text style={s.infoSub}>{order.email}</Text> : null}
          </View>
          <View style={s.infoBlock}>
            <Text style={s.infoLabel}>Status</Text>
            <Text style={[s.infoValue, { color: '#d97706' }]}>BELUM LUNAS</Text>
            <Text style={s.infoSub}>Jatuh tempo: Sebelum keberangkatan</Text>
          </View>
        </View>
        <View style={s.thRow}>
          <Text style={[s.thText, s.c1]}>Deskripsi</Text>
          <Text style={[s.thText, s.c2]}>Pax</Text>
          <Text style={[s.thText, s.c3]}>Harga/Pax</Text>
          <Text style={[s.thText, s.c4]}>Subtotal</Text>
        </View>
        <View style={s.tdRow}>
          <View style={s.c1}>
            <Text style={{ fontFamily: 'Helvetica-Bold' }}>{order.paket}</Text>
            <Text style={{ color: GRAY, fontSize: 9, marginTop: 2 }}>Keberangkatan: {fmtDate(order.tanggal)}</Text>
          </View>
          <Text style={s.c2}>{order.jumlahPax}</Text>
          <Text style={s.c3}>{formatRupiah(order.hargaPerPax)}</Text>
          <Text style={[s.c4, { fontFamily: 'Helvetica-Bold' }]}>{formatRupiah(order.totalHarga)}</Text>
        </View>
        <View style={s.totalBox}>
          <View style={s.grandBox}>
            <Text style={s.grandText}>TOTAL TAGIHAN</Text>
            <Text style={s.grandText}>{formatRupiah(order.totalHarga)}</Text>
          </View>
        </View>
        <View style={s.payBox}>
          <Text style={s.payTitle}>Instruksi Pembayaran</Text>
          {order.metodePembayaran === 'QRIS' ? (
            <>
              <Text style={s.payText}>Metode: QRIS — Scan QR Code yang dikirimkan admin via WhatsApp</Text>
              <Text style={s.payText}>Nominal otomatis terisi: {formatRupiah(order.totalHarga)}</Text>
              <Text style={s.payText}>Kirim bukti bayar ke WA: 0852-8282-8005</Text>
            </>
          ) : (
            <>
              <Text style={s.payText}>Metode: Tunai — Bayar kepada sopir/agen RPM Travel saat keberangkatan</Text>
              <Text style={s.payText}>Simpan faktur ini sebagai referensi pesanan Anda</Text>
            </>
          )}
        </View>
        <View style={s.footer}>
          <Text style={s.footerText}>RPM Travel Curup · WA: 0852-8282-8005 · rpmtravel.co.id</Text>
        </View>
      </Page>
    </Document>
  );
}

export function TicketDocument({ order }: { order: Order }) {
  return (
    <Document title={`E-Ticket ${order.orderNumber}`} author="RPM Travel Curup">
      <Page size="A4" style={s.page}>
        <Text style={s.watermark}>LUNAS</Text>
        <View style={s.header}>
          <View>
            <Text style={s.brandName}>RPM Travel Curup</Text>
            <Text style={s.brandSub}>Jl. S. Parman, Talang Benih, Curup, Bengkulu 39119</Text>
            <Text style={s.brandSub}>WhatsApp: 0852-8282-8005</Text>
          </View>
          <View style={s.docTypeWrap}>
            <Text style={s.docType}>E-TICKET / KWITANSI</Text>
            <Text style={s.docNumber}>No. {order.orderNumber}</Text>
            <Text style={s.docNumber}>Lunas: {order.paidAt ? fmtDate(order.paidAt) : fmtDate(new Date().toISOString())}</Text>
          </View>
        </View>
        <View style={s.divider} />
        <Text style={s.paidBadge}>PEMBAYARAN TELAH DIKONFIRMASI - LUNAS</Text>
        <View style={s.infoRow}>
          <View style={s.infoBlock}>
            <Text style={s.infoLabel}>Nama Penumpang</Text>
            <Text style={s.infoValue}>{order.nama}</Text>
            {order.email ? <Text style={s.infoSub}>{order.email}</Text> : null}
          </View>
          <View style={s.infoBlock}>
            <Text style={s.infoLabel}>Tanggal Keberangkatan</Text>
            <Text style={s.infoValue}>{fmtDate(order.tanggal, { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}</Text>
          </View>
        </View>
        <View style={s.infoRow}>
          <View style={s.infoBlock}>
            <Text style={s.infoLabel}>Paket Perjalanan</Text>
            <Text style={s.infoValue}>{order.paket}</Text>
          </View>
          <View style={s.infoBlock}>
            <Text style={s.infoLabel}>Jumlah Penumpang</Text>
            <Text style={s.infoValue}>{order.jumlahPax} Orang</Text>
          </View>
        </View>
        <View style={s.thinDiv} />
        <View style={s.thRow}>
          <Text style={[s.thText, s.c1]}>Deskripsi</Text>
          <Text style={[s.thText, s.c2]}>Pax</Text>
          <Text style={[s.thText, s.c3]}>Harga/Pax</Text>
          <Text style={[s.thText, s.c4]}>Total</Text>
        </View>
        <View style={s.tdRowAlt}>
          <Text style={[s.c1, { fontFamily: 'Helvetica-Bold' }]}>{order.paket}</Text>
          <Text style={s.c2}>{order.jumlahPax}</Text>
          <Text style={s.c3}>{formatRupiah(order.hargaPerPax)}</Text>
          <Text style={[s.c4, { fontFamily: 'Helvetica-Bold' }]}>{formatRupiah(order.totalHarga)}</Text>
        </View>
        <View style={s.totalBox}>
          <View style={[s.grandBox, { backgroundColor: GREEN }]}>
            <Text style={s.grandText}>TOTAL DIBAYAR</Text>
            <Text style={s.grandText}>{formatRupiah(order.totalHarga)}</Text>
          </View>
        </View>
        <View style={[s.payBox, { borderLeftColor: GREEN, backgroundColor: '#f0fdf4', marginTop: 20 }]}>
          <Text style={[s.payTitle, { color: GREEN }]}>Petunjuk Perjalanan</Text>
          <Text style={s.payText}>Harap berada di titik penjemputan 15 menit sebelum waktu keberangkatan.</Text>
          <Text style={s.payText}>Tunjukkan e-ticket ini kepada sopir atau agen RPM Travel.</Text>
          <Text style={s.payText}>Info sopir dan waktu jemput dikirim via WhatsApp sehari sebelum berangkat.</Text>
          <Text style={s.payText}>Pertanyaan: WA 0852-8282-8005</Text>
        </View>
        <View style={s.footer}>
          <Text style={s.footerText}>Bukti pembayaran sah dari RPM Travel Curup · rpmtravel.co.id</Text>
        </View>
      </Page>
    </Document>
  );
}
