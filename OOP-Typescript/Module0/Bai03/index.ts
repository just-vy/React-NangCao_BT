// Mô tả lớp Account:
// Ba constructor: constructor mặc định (số tài khoản = 999999, tên tài khoản = “chưa xác định”, số dư = 50000); constructor đầy đủ tham số; constructor có hai tham số. Trong trường hợp giá trị tham số không hợp lệ thì gán giá trị mặc định cho thuộc tính tương ứng (dữ liệu gán là hợp lệ khi số tài khoản >0, tên tài khoản khác rỗng, số dư >=50000).
class Account{
    private accountNumber: number;
    private name: string;
    private balance: number;
    private RATE: number = 0.035;

    setAccountNumber(accountNumber: number){
        if(accountNumber > 0)
            this.accountNumber = accountNumber;
        else
            this.accountNumber = 999999;
    }

    setName(name: string){
        if(name != null)
            this.name = name;
        else
            this.name = "chua xac dinh";
    }

    setBalance(balance: number){
        if(balance >= 50000)
            this.balance = balance;
        else
            this.balance = 50000;
    }

    getAccountNumber(): number {
        return this.accountNumber;
    }

    getName(): string{
        return this.name;
    }

    getBalance(): number{
        return this.balance;
    }

    constructor();
    constructor(accountNumber: number, name: string, balance: number);
    constructor(accountNumber?: number, name?: string, balance?: number){
        if(accountNumber != undefined && name != undefined && balance != undefined){
            this.setAccountNumber(accountNumber);
            this.setName(name);
            this.setBalance(balance);
        } else {
            this.accountNumber = 999999;
            this.name = "chua xac dinh";
            this.balance = 50000;
        }
    }

    // deposit(amount : double): cho phép gởi thêm số tiền amount vào tài khoản, hàm trả về true nếu gởi thành công (amount>0).
    deposit(amount: number): boolean{
        if(amount > 0){
            this.balance += amount;
            return true;
        } else
            return false;
    }

    // withdraw(amount : double, fee : double): cho phép rút số tiền amount  từ tài khoản, hàm trả về true nếu rút tiền thành công (amount>0 và amount+fee <= balance).
    withdraw(amount: number, fee: number): boolean{
        if(amount > 0 && amount+fee <= this.balance){
            this.balance -= (amount + fee);
            return true;
        } else
            return false;
    }

    // addInterest(): tính tiền lãi, balance  = balance + balance * RATE.
    addInterest(){
        this.balance += this.balance*this.RATE;
    }

    // transfer(acc2 : Account, amount : double): chuyển một khoản tiền amount từ account này sang account kia, trả về true nếu chuyển thành công.
    transfer(acc2: Account, amount: number): boolean{
        if(this.withdraw(amount, 0) && acc2.deposit(amount))
            return true;
        else
            return false;
    }

    toString(): string{
        return `Account Number: ${this.accountNumber}, Name: ${this.name}, Balance: ${this.balance}`;
    }

    static main(): void{
        // -Tạo 3 đối tượng acc1, acc2, acc3 với các giá trị name, accountNumber, balance lần lượt như sau: {"Ted Murphy", 72354, 102.56}; {"Jane Smith", 69713, 40.00}; {"Edward Demsey", 93757, 759.32}.
        let acc1 = new Account(72354, "Ted Murphy", 102.56);
        let acc2 = new Account(69713, "Jane Smith", 40.00);
        let acc3 = new Account(93757, "Edward Demsey", 759.32);
        console.log(acc1.toString());
        console.log(acc2.toString());
        console.log(acc3.toString());

        // -Gởi thêm số tiền cho acc1 là 25.85, cho acc2 là 500.00.
        acc1.deposit(25.85);
        acc2.deposit(500.00);

        // -Rút khỏi acc2 số tiền là 430.75, mức phí 1.50.
        acc2.withdraw(430.75, 1.50);

        // -Tính tiền lãi cho acc3.
        acc3.addInterest()

        // -Xuất thông tin của acc1, acc2, acc3 (kiểm tra lại kết quả).
        console.log(acc1.toString());
        console.log(acc2.toString());
        console.log(acc3.toString());

        // -Chuyển tiền từ acc2 sang cho acc1 số tiền là 100.00.
        acc2.transfer(acc1, 100.00);

        // -Xuất thông tin của acc1, acc2 (kiểm tra lại kết quả).
        console.log(acc1.toString());
        console.log(acc2.toString());
    }
}

Account.main();