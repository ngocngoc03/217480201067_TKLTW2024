// Lấy thông tin từ người dùng

const lop = prompt("Nhập lớp: ");
const hoTen = prompt("Nhập họ tên: ");

// Hiển thị thông tin

document.getElementById("lop").innerHTML = "Lớp: " + lop;
document.getElementById("ho-ten").innerHTML = "Họ tên sinh viên: " + hoTen;

// Định dạng

document.getElementById("lop").style.color = "black";
document.getElementById("lop").style.fontWeight = "bold";
document.getElementById("ho-ten").style.color = "black";
