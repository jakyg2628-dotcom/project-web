<<<<<<< HEAD
// ========================================
// DATA NILAI MAHASISWA
// ========================================

const dataNilai = [

    {
        mataKuliah: "Pemrograman Web",
        nilai: 90
    },

    {
        mataKuliah: "Basis Data",
        nilai: 85
    },

    {
        mataKuliah: "Sistem Operasi",
        nilai: 78
    },

    {
        mataKuliah: "Matematika Diskrit",
        nilai: 72
    },

    {
        mataKuliah: "Jaringan Komputer",
        nilai: 88
    }

];


// ========================================
// FUNGSI MENENTUKAN GRADE
// ========================================

function tentukanGrade(nilai) {

    if (nilai >= 80) {

        return "A";

    } else if (nilai >= 70) {

        return "B";

    } else if (nilai >= 60) {

        return "C";

    } else {

        return "D";

    }

}


// ========================================
// FUNGSI MENGHITUNG RATA-RATA
// ========================================

function hitungRataRata(data) {

    let total = 0;

    for (const mahasiswa of data) {

        total += mahasiswa.nilai;

    }

    return total / data.length;

}


// ========================================
// MENAMPILKAN DATA DI CONSOLE
// ========================================

console.log("===== DATA NILAI MAHASISWA =====");


for (const mahasiswa of dataNilai) {

    const grade = tentukanGrade(mahasiswa.nilai);

    console.log(
        `${mahasiswa.mataKuliah} : ${mahasiswa.nilai} (${grade})`
    );

}


const rataRata = hitungRataRata(dataNilai);


console.log("-------------------------------");

console.log(
    `Nilai rata-rata: ${rataRata.toFixed(2)}`
);

console.log("-------------------------------");


for (const mahasiswa of dataNilai) {

    if (
        mahasiswa.nilai >= 70 &&
        mahasiswa.nilai <= 100
    ) {

        console.log(
            `${mahasiswa.mataKuliah} : LULUS`
        );

    } else {

        console.log(
            `${mahasiswa.mataKuliah} : TIDAK LULUS`
        );

    }

}


// ========================================
// MENGAMBIL ELEMENT HTML
// ========================================

const nilaiBody =
    document.querySelector("#nilai-body");

const inputPencarian =
    document.querySelector("#pencarian");

const btnLulus =
    document.querySelector("#btnLulus");

const btnSemua =
    document.querySelector("#btnSemua");


// ========================================
// FUNGSI MENAMPILKAN DATA KE TABEL
// ========================================

function tampilkanData(data) {

    nilaiBody.innerHTML = "";


    data.forEach(function (mahasiswa, index) {

        const baris =
            document.createElement("tr");

        const kolomNo =
            document.createElement("td");

        const kolomMataKuliah =
            document.createElement("td");

        const kolomNilai =
            document.createElement("td");

        const kolomGrade =
            document.createElement("td");


        const grade =
            tentukanGrade(mahasiswa.nilai);


        kolomNo.textContent =
            index + 1;

        kolomMataKuliah.textContent =
            mahasiswa.mataKuliah;

        kolomNilai.textContent =
            mahasiswa.nilai;

        kolomGrade.textContent =
            grade;


        baris.append(
            kolomNo,
            kolomMataKuliah,
            kolomNilai,
            kolomGrade
        );


        nilaiBody.append(baris);

    });

}


// ========================================
// TAMPILKAN SEMUA DATA SAAT AWAL
// ========================================

tampilkanData(dataNilai);


// ========================================
// INTERAKSI 1
// SEARCH / PENCARIAN
// ========================================

inputPencarian.addEventListener(
    "input",
    function () {

        const kataKunci =
            inputPencarian.value.toLowerCase();


        const hasilPencarian =
            dataNilai.filter(function (mahasiswa) {

                return mahasiswa.mataKuliah
                    .toLowerCase()
                    .includes(kataKunci);

            });


        tampilkanData(hasilPencarian);

    }
);


// ========================================
// INTERAKSI 2
// MENAMPILKAN NILAI LULUS
// ========================================

btnLulus.addEventListener(
    "click",
    function () {

        const dataLulus =
            dataNilai.filter(function (mahasiswa) {

                return mahasiswa.nilai >= 70;

            });


        tampilkanData(dataLulus);

    }
);


// ========================================
// MENAMPILKAN SEMUA DATA
// ========================================

btnSemua.addEventListener(
    "click",
    function () {

        inputPencarian.value = "";

        tampilkanData(dataNilai);

    }
);


// ========================================
// FORM DATA DIRI
// ========================================

const formDataDiri =
    document.querySelector("#formDataDiri");

const namaInput =
    document.querySelector("#nama");

const emailInput =
    document.querySelector("#email");

const prodiInput =
    document.querySelector("#prodi");

const pesanForm =
    document.querySelector("#pesanForm");


// ========================================
// VALIDASI FORM
// ========================================

formDataDiri.addEventListener(
    "submit",
    function (event) {


        // Mencegah form melakukan reload
        event.preventDefault();


        // Mengambil nilai input
        const nama =
            namaInput.value.trim();

        const email =
            emailInput.value.trim();

        const prodi =
            prodiInput.value.trim();


        // Menghapus class sebelumnya
        pesanForm.classList.remove(
            "pesan-sukses",
            "pesan-error"
        );


        // ====================================
        // CEK INPUT KOSONG
        // ====================================

        if (
            nama === "" ||
            email === "" ||
            prodi === ""
        ) {

            pesanForm.textContent =
                "Semua data harus diisi!";


            pesanForm.classList.add(
                "pesan-error"
            );


            return;

        }


        // ====================================
        // CEK FORMAT EMAIL
        // ====================================

        if (!email.includes("@")) {

            pesanForm.textContent =
                "Email harus menggunakan format yang benar!";


            pesanForm.classList.add(
                "pesan-error"
            );


            return;

        }


        // ====================================
        // JIKA FORM BERHASIL
        // ====================================

        pesanForm.textContent =
            `Data berhasil dikirim. Halo ${nama}!`;


        pesanForm.classList.add(
            "pesan-sukses"
        );


        // Mengosongkan form
        formDataDiri.reset();

    }
);
=======
// ===============================
// DATA NILAI MAHASISWA
// ===============================

const dataNilai = [
    {
        mataKuliah: "Pemrograman Web",
        nilai: 90
    },
    {
        mataKuliah: "Basis Data",
        nilai: 85
    },
    {
        mataKuliah: "Sistem Operasi",
        nilai: 78
    },
    {
        mataKuliah: "Matematika Diskrit",
        nilai: 72
    },
    {
        mataKuliah: "Jaringan Komputer",
        nilai: 88
    }
];


// ===============================
// FUNGSI MENENTUKAN GRADE
// ===============================

function tentukanGrade(nilai) {

    if (nilai >= 80) {
        return "A";
    } else if (nilai >= 70) {
        return "B";
    } else if (nilai >= 60) {
        return "C";
    } else {
        return "D";
    }

}


// ===============================
// FUNGSI MENGHITUNG RATA-RATA
// ===============================

function hitungRataRata(data) {

    let total = 0;

    for (const mahasiswa of data) {
        total += mahasiswa.nilai;
    }

    return total / data.length;

}


// ===============================
// MENAMPILKAN DATA DI CONSOLE
// ===============================

console.log("===== DATA NILAI MAHASISWA =====");

for (const mahasiswa of dataNilai) {

    const grade = tentukanGrade(mahasiswa.nilai);

    console.log(
        `${mahasiswa.mataKuliah} : ${mahasiswa.nilai} (${grade})`
    );

}


// ===============================
// MENAMPILKAN NILAI RATA-RATA
// ===============================

const rataRata = hitungRataRata(dataNilai);

console.log("-------------------------------");

console.log(
    `Nilai rata-rata: ${rataRata.toFixed(2)}`
);


// ===============================
// MENENTUKAN STATUS KELULUSAN
// ===============================

console.log("-------------------------------");

for (const mahasiswa of dataNilai) {

    if (mahasiswa.nilai >= 70 && mahasiswa.nilai <= 100) {

        console.log(
            `${mahasiswa.mataKuliah} : LULUS`
        );

    } else {

        console.log(
            `${mahasiswa.mataKuliah} : TIDAK LULUS`
        );

    }

}
>>>>>>> 0a68be8d9aa4a2c391130ef61c82c6423925cea2
