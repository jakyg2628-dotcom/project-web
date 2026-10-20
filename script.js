
let dataNilai = [
    { mataKuliah: "Pemrograman Web", nilai: 90 },
    { mataKuliah: "Basis Data", nilai: 85 },
    { mataKuliah: "Sistem Operasi", nilai: 78 },
    { mataKuliah: "Matematika Diskrit", nilai: 72 },
    { mataKuliah: "Jaringan Komputer", nilai: 88 }
];

function tentukanGrade(nilai) {
    if (nilai >= 80) return "A";
    if (nilai >= 70) return "B";
    if (nilai >= 60) return "C";
    return "D";
}

function hitungRataRata(data) {
    if (data.length === 0) return 0;

    let total = 0;

    for (const item of data) {
        total += item.nilai;
    }

    return total / data.length;
}

function tampilkanData(data) {
    const tabel = document.getElementById("nilai-body");
    const jumlahData = document.getElementById("jumlahData");

    tabel.replaceChildren();

    data.forEach((item, index) => {
        const baris = document.createElement("tr");

        const no = document.createElement("td");
        const matkul = document.createElement("td");
        const nilai = document.createElement("td");
        const grade = document.createElement("td");
        const aksi = document.createElement("td");
        const tombolHapus = document.createElement("button");

        no.textContent = index + 1;
        matkul.textContent = item.mataKuliah;
        nilai.textContent = item.nilai;
        grade.textContent = tentukanGrade(item.nilai);

        tombolHapus.type = "button";
        tombolHapus.textContent = "Hapus";
        tombolHapus.className = "btn btn-danger btn-sm";
        tombolHapus.dataset.nama = item.mataKuliah;

        aksi.appendChild(tombolHapus);
        baris.append(no, matkul, nilai, grade, aksi);
        tabel.appendChild(baris);
    });

    if (data.length === 0) {
        const baris = document.createElement("tr");
        const kolom = document.createElement("td");

        kolom.colSpan = 5;
        kolom.className = "text-center text-secondary";
        kolom.textContent = "Data tidak ditemukan.";

        baris.appendChild(kolom);
        tabel.appendChild(baris);
    }

    jumlahData.textContent =
        `Menampilkan ${data.length} dari ${dataNilai.length} mata kuliah. Rata-rata seluruh nilai: ${hitungRataRata(dataNilai).toFixed(2)}`;
}

function perbaruiTabel() {
    const kataKunci = document.getElementById("pencarian")
        .value.trim().toLowerCase();

    const hanyaLulus = document.getElementById("btnLulus")
        .classList.contains("active");

    const hasil = dataNilai.filter(item => {
        const cocokNama = item.mataKuliah
            .toLowerCase()
            .includes(kataKunci);

        const cocokNilai = !hanyaLulus || item.nilai >= 70;

        return cocokNama && cocokNilai;
    });

    tampilkanData(hasil);
}

document.getElementById("pencarian")
    .addEventListener("input", perbaruiTabel);

document.getElementById("btnLulus").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("btnSemua").classList.remove("active");
    perbaruiTabel();
});

document.getElementById("btnSemua").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("btnLulus").classList.remove("active");
    document.getElementById("pencarian").value = "";
    perbaruiTabel();
});

document.getElementById("formMataKuliah")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const inputNama = document.getElementById("namaMatkul");
        const inputNilai = document.getElementById("nilaiMatkul");
        const nama = inputNama.value.trim();
        const nilai = inputNilai.value.trim();

        if (!nama || nilai === "") {
            alert("Nama mata kuliah dan nilai wajib diisi.");
            return;
        }

        const nilaiAngka = Number(nilai);

        if (!Number.isFinite(nilaiAngka) ||
            nilaiAngka < 0 || nilaiAngka > 100) {
            alert("Nilai harus berada antara 0 sampai 100.");
            return;
        }

        const sudahAda = dataNilai.some(item =>
            item.mataKuliah.toLowerCase() === nama.toLowerCase()
        );

        if (sudahAda) {
            alert("Mata kuliah tersebut sudah ada.");
            return;
        }

        dataNilai.push({
            mataKuliah: nama,
            nilai: nilaiAngka
        });

        this.reset();
        perbaruiTabel();
    });

document.getElementById("nilai-body")
    .addEventListener("click", function (event) {
        const tombol = event.target.closest("button");

        if (!tombol || !tombol.dataset.nama) return;

        const nama = tombol.dataset.nama;

        if (!confirm(`Hapus mata kuliah ${nama}?`)) return;

        dataNilai = dataNilai.filter(item =>
            item.mataKuliah !== nama
        );

        perbaruiTabel();
    });

document.getElementById("formDataDiri")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const prodi = document.getElementById("prodi").value.trim();
        const pesan = document.getElementById("pesanForm");

        pesan.hidden = false;
        pesan.classList.remove("pesan-sukses", "pesan-error");

        if (!nama || !email || !prodi) {
            pesan.textContent = "Semua kolom wajib diisi.";
            pesan.classList.add("pesan-error");
            return;
        }

        const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!polaEmail.test(email)) {
            pesan.textContent = "Masukkan alamat email yang valid.";
            pesan.classList.add("pesan-error");
            return;
        }

        pesan.textContent = `Terima kasih, ${nama}! Data berhasil divalidasi.`;
        pesan.classList.add("pesan-sukses");

        this.reset();
    });

console.log("Data Nilai Mahasiswa");

for (const item of dataNilai) {
    console.log(
        `${item.mataKuliah}: ${item.nilai} (${tentukanGrade(item.nilai)})`
    );
}

console.log(`Nilai rata-rata: ${hitungRataRata(dataNilai).toFixed(2)}`);

tampilkanData(dataNilai);
