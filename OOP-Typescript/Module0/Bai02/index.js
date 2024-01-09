var Vehicle = /** @class */ (function () {
    function Vehicle(chuXe, loaiXe, triGiaXe, dungTichXylanh) {
        if (chuXe !== undefined && loaiXe !== undefined && triGiaXe !== undefined && dungTichXylanh !== undefined) {
            this.setChuXe(chuXe);
            this.setLoaiXe(loaiXe);
            this.setTriGiaXe(triGiaXe);
            this.setDungTichXylanh(dungTichXylanh);
        }
        else {
            this.chuXe = "";
            this.loaiXe = "";
            this.triGiaXe = 0;
            this.dungTichXylanh = 0;
        }
    }
    Vehicle.prototype.setChuXe = function (chuXe) {
        if (chuXe != null)
            this.chuXe = chuXe;
        else
            this.chuXe = "";
    };
    Vehicle.prototype.setLoaiXe = function (loaiXe) {
        if (loaiXe != null)
            this.loaiXe = loaiXe;
        else
            this.loaiXe = "";
    };
    Vehicle.prototype.setTriGiaXe = function (triGiaXe) {
        if (triGiaXe >= 0)
            this.triGiaXe = triGiaXe;
        else
            this.triGiaXe = 0;
    };
    Vehicle.prototype.setDungTichXylanh = function (dungTichXylanh) {
        if (dungTichXylanh >= 0)
            this.dungTichXylanh = dungTichXylanh;
        else
            this.dungTichXylanh = 0;
    };
    Vehicle.prototype.getChuXe = function () {
        return this.chuXe;
    };
    Vehicle.prototype.getLoaiXe = function () {
        return this.loaiXe;
    };
    Vehicle.prototype.getTriGiaXe = function () {
        return this.triGiaXe;
    };
    Vehicle.prototype.getDungTichXylanh = function () {
        return this.dungTichXylanh;
    };
    Vehicle.prototype.tinhThue = function () {
        if (this.dungTichXylanh < 100)
            return this.triGiaXe * 0.01;
        else if (this.dungTichXylanh >= 100 && this.dungTichXylanh <= 200)
            return this.triGiaXe * 0.03;
        else
            return this.triGiaXe * 0.05;
    };
    Vehicle.prototype.toString = function () {
        return "Chu Xe: ".concat(this.chuXe, ", Loai Xe: ").concat(this.loaiXe, ", Tri Gia Xe: ").concat(this.triGiaXe, ", Dung Tich: ").concat(this.dungTichXylanh, ", Thue: ").concat(this.tinhThue());
    };
    Vehicle.main = function () {
        var xe1 = new Vehicle("Just", "Honda", 20000000, 150);
        console.log(xe1.toString());
        var xe2 = new Vehicle("Vy", "Yamaha", 50000000, 200);
        console.log(xe2.toString());
        var xe3 = new Vehicle("Thien", "Air Blade", 100000000, 250);
        console.log(xe3.toString());
    };
    return Vehicle;
}());
Vehicle.main();
