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