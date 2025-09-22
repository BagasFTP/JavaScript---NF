
let produk = [
{id: 1 , nama: "Laptop", harga:7000000, stok:5},
{id: 2 , nama: "Mouse", harga:200000, stok:10},
{id: 3 , nama: "Keyboard", harga:350000, stok:7},
]
let Idnext = 3;

//Menabahkan Produk
function tambahProduk(nama,harga,stok){
    produk.push(
        {
          id: ++Idnext,  
          nama: nama,
          harga: harga,
          stok: stok
        });
}

// cek fungsi
tambahProduk("mic",200000,10);


//Menampilkan Produk
function tampikanProduk (produk){
    for(i = 0;i < produk.length;i++){
    console.log(produk[i])
   }
}

//cek fungsi
// tampikanProduk(produk);

//Mengapus Produk
function MengapusProduk(id){
    produk = produk.filter(p => p.id !== id);
}

//cek fungsi
MengapusProduk(3);

// tampikanProduk(produk);

//Pembelian dan Perhitungan Jumlah Pesanan
function BeliBarang(id,jumlah){
    let item = produk.find(p=> p.id === id);

    if (item) {

        item.stok -= jumlah;
        let total = item.harga *= jumlah;

        console.log(`Total Harga ${item.nama} Yang Dibeli: Rp Adalah ${total}`);
    } 
}

tampikanProduk(produk);

BeliBarang(2,3);

tampikanProduk(produk);



