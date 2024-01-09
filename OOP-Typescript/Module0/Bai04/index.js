var ToaDo = /** @class */ (function () {
    function ToaDo(ten, x, y) {
        if (ten != undefined && x != undefined && y != undefined) {
            this.setTen(ten);
            this.setX(x);
            this.setY(y);
        }
        else {
            this.setTen("");
            this.setX(0);
            this.setY(0);
        }
    }
    ToaDo.prototype.setTen = function (ten) {
        this.ten = ten;
    };
    ToaDo.prototype.setX = function (x) {
        this.x = x;
    };
    ToaDo.prototype.setY = function (y) {
        this.y = y;
    };
    ToaDo.prototype.getTen = function () {
        return this.ten;
    };
    ToaDo.prototype.getX = function () {
        return this.x;
    };
    ToaDo.prototype.getY = function () {
        return this.y;
    };
    ToaDo.prototype.toString = function () {
        return "".concat(this.ten, "(").concat(this.x, ", ").concat(this.y, ")");
    };
    return ToaDo;
}());
var HinhTron = /** @class */ (function () {
    function HinhTron(tam, banKinh) {
        if (tam != undefined && banKinh != undefined) {
            this.tam = tam;
            this.banKinh = banKinh;
        }
        else {
            this.tam = new ToaDo();
            this.banKinh = 0;
        }
    }
    HinhTron.prototype.setTam = function (tam) {
        this.tam = tam;
    };
    HinhTron.prototype.setBanKinh = function (banKinh) {
        this.banKinh = banKinh;
    };
    HinhTron.prototype.getTam = function () {
        return this.tam;
    };
    HinhTron.prototype.getBanKinh = function () {
        return this.banKinh;
    };
    HinhTron.prototype.tinhChuVi = function () {
        return this.banKinh * 2 * Math.PI;
    };
    HinhTron.prototype.tinhDienTich = function () {
        return Math.pow(this.banKinh, 2) * Math.PI;
    };
    HinhTron.prototype.toString = function () {
        return "Tam: ".concat(this.tam.toString(), ", Ban Kinh: ").concat(this.banKinh, ", Chu Vi: ").concat(this.tinhChuVi().toFixed(2), ", Dien Tich: ").concat(this.tinhDienTich().toFixed(2));
    };
    return HinhTron;
}());
// Yêu cầu kết xuất: Giả sử nhập vào hình tròn có tâm O với 2 tọa độ x,y là 5,5, có bán kính là 10.5 thì xuất kết quả tương ứng là: “Hình tròn có tâm O(5,5) với bán kính 10.5 có diện tích và chu vi lần lượt là 346.185 và 65.940.”
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.main = function () {
        var circle = new HinhTron(new ToaDo("O", 5, 5), 10.5);
        console.log(circle.toString());
    };
    return Test;
}());
Test.main();
