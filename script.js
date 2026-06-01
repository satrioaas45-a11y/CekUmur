const inputNama = document.getElementById('nama');
const popup = document.getElementById('popup');
const hasilText = document.getElementById('hasilText');

const inputTanggal = document.getElementById('tanggalLahir');
const inputBulan = document.getElementById('bulanLahir');
const inputTahun = document.getElementById('tahunLahir');
const btnTebak = document.getElementById('btnTebak');

btnTebak.addEventListener('click', function () {

    const nama = inputNama.value;
    const tanggal = parseInt(inputTanggal.value);
    const bulan = parseInt(inputBulan.value);
    const tahun = parseInt(inputTahun.value);

    // Validasi
    if (nama === "" || isNaN(tanggal) || isNaN(bulan) || isNaN(tahun)) {
        hasilText.innerHTML = `
        ⚠️ Isi dulu semua data ya!
        `;
        popup.style.display = "flex";
        return;
    }

    // Ambil tanggal sekarang
    const hariIni = new Date();
    const tahunSekarang = hariIni.getFullYear();
    const bulanSekarang = hariIni.getMonth() + 1;
    const tanggalSekarang = hariIni.getDate();

    // Hitung umur
    let umur = tahunSekarang - tahun;

    if (
        bulanSekarang < bulan ||
        (bulanSekarang === bulan && tanggalSekarang < tanggal)
    ) {
        umur--;
    }

    // --- LOGIKA PESAN POPUP BARU ---
    let pesanTambahan = "";
    
    // Jika tahun lahir di atas 1960
    if (tahun > 1960) {
        pesanTambahan = "🕵️ Misi berhasil! Umurmu tersimpan sebagai rahasia negara.";
    } 
    // Jika tahun lahir 1960 atau di bawahnya
    else {
        pesanTambahan = "📖 Begitu banyak cerita dan pengalaman yang telah Anda kumpulkan sepanjang hidup.";
    }

    // Output popup
    hasilText.innerHTML = `
    👤 Nama: <b>${nama}</b><br><br>

    🎂 Umur Kamu:
    <b>${umur} Tahun</b><br><br>

    ${pesanTambahan}
    `;
    // -------------------------------

    popup.style.display = "flex";

});

/* Function tutup popup */
function tutupPopup() {
    popup.style.display = "none";
}
