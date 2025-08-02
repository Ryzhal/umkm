
// Fungsi untuk mengirim pesan WhatsApp
function orderProduct(productName, productPrice) {
  // Ganti dengan nomor WhatsApp Anda yang sebenarnya
  const whatsappNumber = '+6285256437592';
  
  // Membuat pesan yang lebih informatif
  const message = `Halo, saya ingin memesan produk:
  
*Nama Produk*: ${productName}
*Harga*: ${productPrice}

Bisa saya mendapatkan informasi lebih lanjut?
- Apakah produk ini tersedia?
- Bagaimana cara pembayarannya?
- Berapa estimasi pengirimannya?

Terima kasih.`;

  // Encode pesan untuk URL
  const encodedMessage = encodeURIComponent(message);
  
  // Buka WhatsApp dengan pesan
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
}
