// Bài 1.
// a. Cài đặt lớp hình tam giác, biết tam giác có 3 cạnh ma, mb, mc, viết các phương thức sau:
// -Constructor mặc định (không tham số).
// -Constructor đủ tham số: nếu giá trị truyền có số âm hoặc nếu 3 giá trị không lập thành hình tam giác thì gán 3 thuộc tính bằng 0.
// -Các phương thức getter/setter: nếu giá trị không hợp lệ thì không gán (giữ lại giá trị cũ).
// -Các phương thức tính chu vi, phương thức tính diện tích.
// -Phương thức trả về thông tin kiểu tam giác (thường, cân, đều, không phải tam giác).
// -Phương thức toString để diễn tả đối tượng ở dạng chuỗi gồm: thông tin 3 cạnh, kiểu tam giác, chu vi, diện tích. 
class TamGiac{
    private ma: number;
    private mb: number;
    private mc: number;
    
    // -Constructor mặc định (không tham số).
    constructor();
    // -Constructor đủ tham số: nếu giá trị truyền có số âm hoặc nếu 3 giá trị không lập thành hình tam giác thì gán 3 thuộc tính bằng 0.
    constructor(ma: number, mb: number, mc: number);
    constructor(ma?: number, mb?: number, mc?: number){
        this.ma = 0;
        this.mb = 0;
        this.mc = 0;

        if (ma != undefined && mb != undefined && mc != undefined){
            if (ma > 0 && mb > 0 && mc > 0 && ma + mb > mc && mb + mc > ma && ma + mc > mb){
                this.ma = ma;
                this.mb = mb;
                this.mc = mc;
            }
        }
    }

    // -Các phương thức getter/setter: nếu giá trị không hợp lệ thì không gán (giữ lại giá trị cũ).
    getMa(): number{
        return this.ma;
    }

    setMa(ma: number){
        if(ma > 0)
            this.ma = ma;
    }

    getMb(): number{
        return this.mb;
    }

    setMb(mb: number){
        if(mb > 0)
            this.mb = mb;
    }

    getMc(): number{
        return this.mc;
    }

    setMc(mc: number){
        if(mc > 0)
            this.mc = mc;
    }
    
    // -Các phương thức tính chu vi, phương thức tính diện tích.
    tinhChuVi(): number{
        return this.ma + this.mb + this.mc;
    }

    tinhDienTich(): number{
        let p = this.tinhChuVi() /2;
        return Math.sqrt((p)*(p-this.ma)*(p-this.mb)*(p-this.mc));
    }

    // -Phương thức trả về thông tin kiểu tam giác (thường, cân, đều, không phải tam giác).
    kieuTamGiac(): string{
        if(!(this.ma > 0 && this.mb > 0 && this.mc > 0 && this.ma + this.mb > this.mc && this.mb + this.mc > this.ma && this.ma + this.mc > this.mb))
            return "Khong Phai Tam Giac"
        else if(this.ma==this.mb && this.mb==this.mc && this.ma==this.mc)
            return "Tam Giac Deu";
        else if(this.ma==this.mb || this.mb==this.mc || this.ma==this.mc)
            return "Tam Giac Can";
        else
            return "Tam Giac Thuong";
    }

    static header(): string{
        return "|Canh ma|Canh mb|Canh mc|Loai Tam Giac\t|Chu Vi|Dien Tich|";
    }

    // -Phương thức toString để diễn tả đối tượng ở dạng chuỗi gồm: thông tin 3 cạnh, kiểu tam giác, chu vi, diện tích. 
    toString(): string{
        return `|\t${this.ma}|\t${this.mb}|\t${this.mc}|${this.kieuTamGiac()}|${this.tinhChuVi()}|${this.tinhDienTich().toFixed(2)}|`;
    }

    static main(): void{
        console.log(this.header());
        const t1 = new TamGiac(0, 4, 6);
        console.log(t1.toString());
        const t2 = new TamGiac(-5, 0, -4);
        console.log(t2.toString());
        const t3 = new TamGiac(5, 4, 6);
        console.log(t3.toString());
        const t4 = new TamGiac(4, 4, 6);
        console.log(t4.toString());
        const t5 = new TamGiac(6, 6, 6);
        console.log(t5.toString());
    }
}
TamGiac.main();