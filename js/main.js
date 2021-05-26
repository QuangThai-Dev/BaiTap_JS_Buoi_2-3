// Bài 1: Tính  tiền lương nhân viên
/**
 * b1: Input
 * - luongMotNgay, soNgayLam
 * 
 * b2: Handel
 * - Tạo biến luongMotNgay, soNgayLam, luongThucNhan
 * - Tính lương thực nhận: luongThucNhan = luongMotNgay * soNgayLam
 * b3: Output
 * - Xuất tiền luong thực hiện
 */
var luongMotNgay = 100000;
var btnTinhTienLuong = document.getElementById('btnTinhTienLuong');
btnTinhTienLuong.onclick = function() {
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luongNhanVien = luongMotNgay * soNgayLam;
    alert('Lương của nhân viên là: ' + luongNhanVien + ' VNĐ');
}

// Bài 2: Tính giá trị trung bình
/**
 * b1: Input
 * - Giá trị 5 biến
 * 
 * b2: Handel
 * - Tạo biến a, b, c, d, e, giaTriTrungBinh
 * - Tính giá trị trung bình : giaTriTrungBinh = (a + b + c + d + e)/5
 * b3: Output
 * - Xuất giá trị trung bình
 */
var btnGiaTriTrungBinh = document.getElementById('btnGiaTriTrungBinh');
btnGiaTriTrungBinh.onclick = function() {
    var soThuNhat = document.getElementById('soThuNhat').value;
    var soThuHai = document.getElementById('soThuHai').value;
    var soThuBa = document.getElementById('soThuBa').value;
    var soThuTu = document.getElementById('soThuTu').value;
    var soThuNam = document.getElementById('soThuNam').value;
    var giaTriTrungBinh = (Number(soThuNhat) + Number(soThuHai) + Number(soThuBa) + Number(soThuTu) + Number(soThuNam)) / 5
    alert('Giá trị trung bình là: ' + giaTriTrungBinh)
}

// Bài 3: Quy đổi tiền
/**
 * b1: Input
 * - giaTriUSD, soTienQuyDoi
 * 
 * b2: Handel
 * - Tạo biến tienUsd, soTienQuyDoi, sauQuyDoiVNd
 * - Tính giá trị sau quy đổi Vnd : sauQuyDoiVnd = giaTriUSD * soTienQuyDoi
 * b3: Output
 * - Xuất giá trị sau quy đổi
 */
var giaTriUSD = 23500;
var btnTinhTienUSD = document.getElementById('btnTinhTienUSD').onclick = function() {
    var tienQuyDoi = document.getElementById('tienQuyDoi').value;
    var tienSauQuyDoi = giaTriUSD * tienQuyDoi;
    alert('Tiền sau quy đổi: ' + tienSauQuyDoi + ' VNĐ');
}

//Bài 4: Tính Chu vi Diện tích hình chữ nhật
/**
 * b1:Input
 * - Giá trị chiều dài chiều rộng hình chữ nhật
 * b2 : handle
 * - Tạo biến chieuDai, chieuRong, chuVi, dienTich
 * - Tính chu vi HCN: chuVi = (chieuDai + chieuRong) * 2;
 * - Tính diện tích HCN: dienTich = chieuDai * chieuRong;
 * b3: Output
 * - Xuất ra chu vi và diện tích HCN
 */
var chuViHCN = document.getElementById('chuViHCN');
var dienTichHCN = document.getElementById('dienTichHCN')
var thongTinChiTiet = document.getElementById('thongTinChiTiet');
thongTinChiTiet.style.display = 'none';
var btnHCN = document.getElementById('btnHCN').onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    var dienTich = chieuDai * chieuRong;
    // alert('chu vi: ' + chuVi + 'dien tich: ' + dienTich);
    thongTinChiTiet.style.display = 'block';
    chuViHCN.innerHTML = 'Chu vi HCN: ' + chuVi;
    dienTichHCN.innerHTML = 'Diện tích HCN: ' + dienTich;

}

// Bai5: Tính tổng hai ký số
/**
 * b1: Input
 * - Nhập số có hai chữ số
 * b2: Handle
 * - Tạo biến soHaiChuSo, soHangChuc, soHangDonVi, tongKySo
 * - Lấy số hàng chục: soHangChuc = Math.floor(soHaiChuSo / 10)
 * - Lấy số hàng đơn vị: soHangDonVi = soHaiChuSo % 10
 * - Tính tổng hai ký số: tongKySo = soHangChuc + soHangDonVi
 * b3: Output
 * - Xuất tổng hai ký số vừa nhập
 */
var tongHaiKySo = document.getElementById('tongHaiKySo');
var thongTin = document.getElementById('thongTin');
thongTin.style.display = 'none';
var btnTinhTong = document.getElementById('btnTinhTong').onclick = function() {
    var soHaiChuSo = document.getElementById('soHaiChuSo').value;
    var soHangChuc = Math.floor(soHaiChuSo / 10);
    var soHangDonVi = soHaiChuSo % 10;
    var tongKySo = soHangChuc + soHangDonVi;
    thongTin.style.display = 'block';
    tongHaiKySo.innerHTML = 'Tổng hai ký số là: ' + tongKySo;

}