// js/pagination.js
// Toggle menu visibility
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
    });
  });


const itemsPerPage = 6;

function changePage(page) {
  const items = document.querySelectorAll('.menu-item');
  const totalItems = items.length;

  // Sembunyikan semua item
  items.forEach(item => item.classList.add('hidden'));

  // Hitung indeks awal dan akhir
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  // Tampilkan item yang sesuai
  for (let i = start; i < end && i < totalItems; i++) {
    items[i].classList.remove('hidden');
  }

  // Highlight tombol aktif
  document.querySelectorAll('.pagination-btn').forEach((btn, idx) => {
    const isActive = idx + 1 === page;
    btn.classList.toggle('bg-yellow-600', isActive);
    btn.classList.toggle('text-white', isActive);
  });
}

// Jalankan saat halaman selesai dimuat
document.getElementById('orderForm').addEventListener('submit', function (e) {
    const nomorInput = document.getElementById('nomor');
    const nomor = nomorInput.value;
    const errorText = document.getElementById('errorNomor');
  
    // Cek awalan dan panjang nomor
    if (!nomor.startsWith("08") || nomor.length > 13) {
      e.preventDefault(); // hentikan pengiriman form
      errorText.classList.remove("hidden"); // tampilkan pesan error
      nomorInput.classList.add("border-red-500"); // tandai input
      return;
    } else {
      errorText.classList.add("hidden");
      nomorInput.classList.remove("border-red-500");
    }
  
    // Lanjut ke WhatsApp seperti biasa
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const pesanan = document.getElementById('pesanan').value;
  
    const nomorWA = "62895324757519";
    const pesanWA =
      `=> *Pesanan Baru*\n\n` +
      `=> Nama: ${nama}\n` +
      `=> No HP: ${nomor}\n` +
      `=> Alamat: ${alamat}\n\n` +
      `=> *Pesanan:*\n${pesanan}\n\n` +
      `=> Terima kasih!`;
  
    const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesanWA)}`;
    window.open(urlWA, '_blank');
  });
  
  // Jalankan saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
    changePage(1); // tampilkan halaman pertama saat load
  });
  
  
