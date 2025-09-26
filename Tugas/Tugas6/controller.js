import data from './data.js';

function lihatData() {
  console.log("=== DAFTAR DATA ===");
  data.map((item, index) => {
    console.log(`${index + 1}. ${item.nama} | ${item.umur} | ${item.alamat} | ${item.email}`);
  });
}

function tambahData(nama, umur, alamat, email) {
  data.push({ nama, umur, alamat, email });
  console.log(`✅ Data ${nama} berhasil ditambahkan.`);
}

function hapusData(index) {
  if (index >= 0 && index < data.length) {
    console.log(`🗑️ Data ${data[index].nama} dihapus.`);
    data.splice(index, 1);
  } else {
    console.log("❌ Index tidak ditemukan.");
  }
}

lihatData();
tambahData("Zaki", 26, "Cirebon", "zaki@mail.com");
tambahData("Lia", 23, "Bali", "lia@mail.com");
lihatData();
hapusData(0);
lihatData();
