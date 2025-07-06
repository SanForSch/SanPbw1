let nilai = 80;

// Ternary operator
let status = nilai >= 75 ? "Lulus" : "Tidak Lulus";
console.log("Status: " + status);

// Switch statement
let grade;
switch (true) {
  case nilai >= 90:
    grade = "A";
    break;
  case nilai >= 75:
    grade = "B";
    break;
  case nilai >= 60:
    grade = "C";
    break;
  default:
    grade = "D atau E";
}
console.log("Grade: " + grade);

// Loop dengan continue dan break
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; // lewati angka genap
  if (i === 9) break; // berhenti di angka 9
  console.log("Angka ganjil ke-" + i);
}

function luasPersegi(sisi) {
  return sisi * sisi;
}

let hasil = luasPersegi(5);
console.log("Luas persegi dengan sisi 5 adalah " + hasil);

function ubahTeks() {
  document.getElementById("output").innerText = "Teks telah diubah!";
}
document.getElementById("btn2").addEventListener("click", function () {
  alert("Tombol kedua diklik!");
});

let mahasiswa = {
  nama: "Ichsan",
  nim: "24.240.0028",
  cetakData: function () {
    console.log("Nama: " + this.nama + ", NIM: " + this.nim);
  },
};

mahasiswa.cetakData();
