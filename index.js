document.getElementById('btnTinhTien').onclick = function(){
    var tongTienThanhToan = document.getElementById('tongTienThanhToan').value;
    var tyleTip = document.getElementById('tyleTip').value;
    var soNguoi = document.getElementById('soNguoi').value;
    // var phanTramTip = document.getElementById('phanTramTip').value;

    var tienTipTungNguoi = tongTienThanhToan * tyleTip / 100 / soNguoi;

    document.getElementById('tongTienTip').style.visibility = "visible";
    document.getElementById('tienTip').innerHTML = '$ ' + tienTipTungNguoi.toFixed(2);
}
document.getElementById('tongTienThanhToan').onfocus = function(){
    document.getElementById('tongTienThanhToan').value = '';
    document.getElementById('soNguoi').value = '';
    document.getElementById('tyleTip').value = '0';
    document.getElementById('tongTienTip').style.visibility = 'hidden';
}