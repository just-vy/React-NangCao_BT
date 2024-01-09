class ToaDo{
    private ten: string;
    private x: number;
    private y: number;

    setTen(ten: string){
        this.ten = ten;
    }

    setX(x: number){
        this.x = x;
    }

    setY(y: number){
        this.y = y;
    }

    getTen(): string{
        return this.ten;
    }

    getX(): number{
        return this.x;
    }

    getY(): number{
        return this.y;
    }

    constructor();
    constructor(ten: string, x: number, y: number);
    constructor(ten?: string, x?: number, y?: number){
        if(ten != undefined && x != undefined && y != undefined){
            this.setTen(ten);
            this.setX(x);
            this.setY(y);
        } else {
            this.setTen("");
            this.setX(0);
            this.setY(0);
        }
    }

    toString(): string{
        return `${this.ten}(${this.x}, ${this.y})`;
    }
}

class HinhTron{
    private tam: ToaDo;
    private banKinh: number;

    setTam(tam: ToaDo){
        this.tam = tam;
    }

    setBanKinh(banKinh: number){
        this.banKinh = banKinh;
    }

    getTam(): ToaDo{
        return this.tam;
    }

    getBanKinh(): number{
        return this.banKinh;
    }

    constructor();
    constructor(tam: ToaDo, banKinh: number);
    constructor(tam?: ToaDo, banKinh?: number){
        if(tam != undefined && banKinh != undefined){
            this.tam = tam;
            this.banKinh = banKinh;
        } else {
            this.tam = new ToaDo();
            this.banKinh = 0;
        }
    }

    tinhChuVi(): number{
        return this.banKinh * 2 * Math.PI;
    }

    tinhDienTich(): number{
        return this.banKinh ** 2 * Math.PI;
    }

    toString(): string{
        return `Tam: ${this.tam.toString()}, Ban Kinh: ${this.banKinh}, Chu Vi: ${this.tinhChuVi().toFixed(2)}, Dien Tich: ${this.tinhDienTich().toFixed(2)}`;
    }
}

// Yêu cầu kết xuất: Giả sử nhập vào hình tròn có tâm O với 2 tọa độ x,y là 5,5, có bán kính là 10.5 thì xuất kết quả tương ứng là: “Hình tròn có tâm O(5,5) với bán kính 10.5 có diện tích và chu vi lần lượt là 346.185 và 65.940.”
class Test{
    static main(){
        let circle = new HinhTron(new ToaDo("O", 5, 5), 10.5);
        console.log(circle.toString());
    }
}

Test.main();