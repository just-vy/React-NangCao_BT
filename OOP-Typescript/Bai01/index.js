// Bài 1.
// a. Cài đặt lớp hình tam giác, biết tam giác có 3 cạnh ma, mb, mc, viết các phương thức sau:
// -Constructor mặc định (không tham số).
// -Constructor đủ tham số: nếu giá trị truyền có số âm hoặc nếu 3 giá trị không lập thành hình tam giác thì gán 3 thuộc tính bằng 0.
// -Các phương thức getter/setter: nếu giá trị không hợp lệ thì không gán (giữ lại giá trị cũ).
// -Các phương thức tính chu vi, phương thức tính diện tích.
// -Phương thức trả về thông tin kiểu tam giác (thường, cân, đều, không phải tam giác).
// -Phương thức toString để diễn tả đối tượng ở dạng chuỗi gồm: thông tin 3 cạnh, kiểu tam giác, chu vi, diện tích. 
var TamGiac = /** @class */ (function () {
    function TamGiac(ma, mb, mc) {
        this.ma = 0;
        this.mb = 0;
        this.mc = 0;
        if (ma != undefined && mb != undefined && mc != undefined) {
            if (ma > 0 && mb > 0 && mc > 0 && ma + mb > mc && mb + mc > ma && ma + mc > mb) {
                this.ma = ma;
                this.mb = mb;
                this.mc = mc;
            }
        }
    }
    // -Các phương thức getter/setter: nếu giá trị không hợp lệ thì không gán (giữ lại giá trị cũ).
    TamGiac.prototype.getMa = function () {
        return this.ma;
    };
    TamGiac.prototype.setMa = function (ma) {
        if (ma > 0)
            this.ma = ma;
    };
    TamGiac.prototype.getMb = function () {
        return this.mb;
    };
    TamGiac.prototype.setMb = function (mb) {
        if (mb > 0)
            this.mb = mb;
    };
    TamGiac.prototype.getMc = function () {
        return this.mc;
    };
    TamGiac.prototype.setMc = function (mc) {
        if (mc > 0)
            this.mc = mc;
    };
    // -Các phương thức tính chu vi, phương thức tính diện tích.
    TamGiac.prototype.tinhChuVi = function () {
        return this.ma + this.mb + this.mc;
    };
    TamGiac.prototype.tinhDienTich = function () {
        var p = this.tinhChuVi() / 2;
        return Math.sqrt((p) * (p - this.ma) * (p - this.mb) * (p - this.mc));
    };
    // -Phương thức trả về thông tin kiểu tam giác (thường, cân, đều, không phải tam giác).
    TamGiac.prototype.kieuTamGiac = function () {
        if (!(this.ma > 0 && this.mb > 0 && this.mc > 0 && this.ma + this.mb > this.mc && this.mb + this.mc > this.ma && this.ma + this.mc > this.mb))
            return "Khong Phai Tam Giac";
        else if (this.ma == this.mb && this.mb == this.mc && this.ma == this.mc)
            return "Tam Giac Deu";
        else if (this.ma == this.mb || this.mb == this.mc || this.ma == this.mc)
            return "Tam Giac Can";
        else
            return "Tam Giac Thuong";
    };
    TamGiac.header = function () {
        return "|Canh ma|Canh mb|Canh mc|Loai Tam Giac\t|Chu Vi|Dien Tich|";
    };
    // -Phương thức toString để diễn tả đối tượng ở dạng chuỗi gồm: thông tin 3 cạnh, kiểu tam giác, chu vi, diện tích. 
    TamGiac.prototype.toString = function () {
        return "|\t".concat(this.ma, "|\t").concat(this.mb, "|\t").concat(this.mc, "|").concat(this.kieuTamGiac(), "|").concat(this.tinhChuVi(), "|").concat(this.tinhDienTich().toFixed(2), "|");
    };
    TamGiac.main = function () {
        console.log(this.header());
        var t1 = new TamGiac(0, 4, 6);
        console.log(t1.toString());
        var t2 = new TamGiac(-5, 0, -4);
        console.log(t2.toString());
        var t3 = new TamGiac(5, 4, 6);
        console.log(t3.toString());
        var t4 = new TamGiac(4, 4, 6);
        console.log(t4.toString());
        var t5 = new TamGiac(6, 6, 6);
        console.log(t5.toString());
    };
    return TamGiac;
}());
TamGiac.main();
