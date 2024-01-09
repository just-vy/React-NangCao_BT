// Sở giao thông cần theo dõi việc đăng ký xe (Vehicle) của người dân, biết mỗi xe cần lưu các thông tin là: chủ xe, loại xe, trị giá xe (>=0), dung tích xylanh (>=0). Dựa vào thông tin trị giá xe và dung tích xylanh, sở giao thông cũng tính mức thuế phải đóng trước bạ khi mua xe như sau:
// -Dưới 100cc, 1% trị giá xe.
// -Từ 100 đến 200cc, 3% trị giá xe.
// -Trên 200cc, 5% trị giá xe.

// a. Hãy thiết kế và cài đặt lớp Vehicle với các attributes và methods phù hợp (có kiểm tra ràng buộc dữ liệu). Lớp phải có các constructor và phải bảo đảm tính encapsulation.
class Vehicle{
    private chuXe: string;
    private loaiXe: string;
    private triGiaXe: number;
    private dungTichXylanh: number;

    constructor();
    constructor(chuXe: string, loaiXe: string, triGiaXe: number, dungTichXylanh: number);
    constructor(chuXe?: string, loaiXe?: string, triGiaXe?: number, dungTichXylanh?: number) {
        if (chuXe !== undefined && loaiXe !== undefined && triGiaXe !== undefined && dungTichXylanh !== undefined) {
            this.setChuXe(chuXe);
            this.setLoaiXe(loaiXe);
            this.setTriGiaXe(triGiaXe);
            this.setDungTichXylanh(dungTichXylanh);
        } else {
            this.chuXe = "";
            this.loaiXe = "";
            this.triGiaXe = 0;
            this.dungTichXylanh = 0;
        }
    }

    setChuXe(chuXe: string){
        if(chuXe != null)
            this.chuXe = chuXe;
        else
            this.chuXe = "";
    }

    setLoaiXe(loaiXe: string){
        if(loaiXe != null)
            this.loaiXe = loaiXe;
        else
            this.loaiXe = "";
    }

    setTriGiaXe(triGiaXe: number){
        if(triGiaXe >= 0)
            this.triGiaXe = triGiaXe;
        else
            this.triGiaXe = 0;
    }

    setDungTichXylanh(dungTichXylanh: number){
        if(dungTichXylanh >= 0)
            this.dungTichXylanh = dungTichXylanh;
        else
            this.dungTichXylanh = 0;
    }

    getChuXe(): string{
        return this.chuXe;
    }

    getLoaiXe(): string{
        return this.loaiXe;
    }

    getTriGiaXe(): number{
        return this.triGiaXe;
    }

    getDungTichXylanh(): number{
        return this.dungTichXylanh;
    }

    // -Dưới 100cc, 1% trị giá xe.
    // -Từ 100 đến 200cc, 3% trị giá xe.
    // -Trên 200cc, 5% trị giá xe.
    tinhThue(): number{
        if(this.dungTichXylanh < 100)
            return this.triGiaXe * 0.01;
        else if(this.dungTichXylanh >= 100 && this.dungTichXylanh <= 200)
            return this.triGiaXe * 0.03;
        else
            return this.triGiaXe * 0.05;
    }

    toString(): string{
        return `Chu Xe: ${this.chuXe}, Loai Xe: ${this.loaiXe}, Tri Gia Xe: ${this.triGiaXe}, Dung Tich: ${this.dungTichXylanh}, Thue: ${this.tinhThue()}`;
    }

    // b. Xây dựng class chứa hàm main, có các công việc: 
    // Tạo 3 đối tượng Vehicle xe1, xe2, xe3. Dữ liệu được gán sẵn hoặc cho người dùng nhập.
    static main(): void{
        const xe1 = new Vehicle("Just", "Honda", 20000000, 150);
        console.log(xe1.toString());
        const xe2 = new Vehicle("Vy", "Yamaha", 50000000, 200);
        console.log(xe2.toString());
        const xe3 = new Vehicle("Thien", "Air Blade", 100000000, 250);
        console.log(xe3.toString());
    }
}

Vehicle.main();