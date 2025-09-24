class Pelanggan {
    #nomor;

    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.#nomor = nomorTelepon;
        this.kendaraan = kendaraanDisewa || null;
    }

    getNomor() {
        return this.#nomor;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraan = kendaraan;
    }
}

class Penyewaan {
    constructor() {
        this.daftarPelanggan = []; 
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tampilkanDaftar() {
        console.log("=== Daftar Pelanggan ===");
        this.daftarPelanggan.forEach((p, i) => {
            console.log(`${i+1}. ${p.nama} - ${p.getNomor()} - ${p.kendaraan.merk}`);
        });
    }
}

class kendaraan {
    constructor(merk) {
        this.merk = merk;
    }

    BunyiGas() {}
}

class mobil extends kendaraan {
    constructor(merk, pintu) {
        super(merk);
        this.pintu = pintu;
    }

    BunyiGas() {
        console.log("Vrooom Vrooom");
    }
}

class motor extends kendaraan {
    constructor(merk, stang) {
        super(merk);
        this.stang = stang;
    }

    BunyiGas() {
        console.log("Brong Brong");
    }
}


const avanza = new mobil("Avanza", 5);
const nmax = new motor("NMAX", "Stang");

const budi = new Pelanggan("Budi", "0812-0000-1111", avanza);
const siti = new Pelanggan("Siti", "0813-2222-3333", nmax);

const sistem = new Penyewaan();
sistem.tambahPelanggan(budi);
sistem.tambahPelanggan(siti);

sistem.tampilkanDaftar();
