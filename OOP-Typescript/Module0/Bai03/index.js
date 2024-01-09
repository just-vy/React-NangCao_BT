// Mô tả lớp Account:
// Ba constructor: constructor mặc định (số tài khoản = 999999, tên tài khoản = “chưa xác định”, số dư = 50000); constructor đầy đủ tham số; constructor có hai tham số. Trong trường hợp giá trị tham số không hợp lệ thì gán giá trị mặc định cho thuộc tính tương ứng (dữ liệu gán là hợp lệ khi số tài khoản >0, tên tài khoản khác rỗng, số dư >=50000).
var Account = /** @class */ (function () {
    function Account(accountNumber, name, balance) {
        this.RATE = 0.035;
        if (accountNumber != undefined && name != undefined && balance != undefined) {
            this.setAccountNumber(accountNumber);
            this.setName(name);
            this.setBalance(balance);
        }
        else {
            this.accountNumber = 999999;
            this.name = "chua xac dinh";
            this.balance = 50000;
        }
    }
    Account.prototype.setAccountNumber = function (accountNumber) {
        if (accountNumber > 0)
            this.accountNumber = accountNumber;
        else
            this.accountNumber = 999999;
    };
    Account.prototype.setName = function (name) {
        if (name != null)
            this.name = name;
        else
            this.name = "chua xac dinh";
    };
    Account.prototype.setBalance = function (balance) {
        if (balance >= 50000)
            this.balance = balance;
        else
            this.balance = 50000;
    };
    Account.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    // deposit(amount : double): cho phép gởi thêm số tiền amount vào tài khoản, hàm trả về true nếu gởi thành công (amount>0).
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        else
            return false;
    };
    // withdraw(amount : double, fee : double): cho phép rút số tiền amount  từ tài khoản, hàm trả về true nếu rút tiền thành công (amount>0 và amount+fee <= balance).
    Account.prototype.withdraw = function (amount, fee) {
        if (amount > 0 && amount + fee <= this.balance) {
            this.balance -= (amount + fee);
            return true;
        }
        else
            return false;
    };
    // addInterest(): tính tiền lãi, balance  = balance + balance * RATE.
    Account.prototype.addInterest = function () {
        this.balance += this.balance * this.RATE;
    };
    // transfer(acc2 : Account, amount : double): chuyển một khoản tiền amount từ account này sang account kia, trả về true nếu chuyển thành công.
    Account.prototype.transfer = function (acc2, amount) {
        if (this.withdraw(amount, 0) && acc2.deposit(amount))
            return true;
        else
            return false;
    };
    Account.prototype.toString = function () {
        return "Account Number: ".concat(this.accountNumber, ", Name: ").concat(this.name, ", Balance: ").concat(this.balance);
    };
    Account.main = function () {
        // -Tạo 3 đối tượng acc1, acc2, acc3 với các giá trị name, accountNumber, balance lần lượt như sau: {"Ted Murphy", 72354, 102.56}; {"Jane Smith", 69713, 40.00}; {"Edward Demsey", 93757, 759.32}.
        var acc1 = new Account(72354, "Ted Murphy", 102.56);
        var acc2 = new Account(69713, "Jane Smith", 40.00);
        var acc3 = new Account(93757, "Edward Demsey", 759.32);
        console.log(acc1.toString());
        console.log(acc2.toString());
        console.log(acc3.toString());
        // -Gởi thêm số tiền cho acc1 là 25.85, cho acc2 là 500.00.
        acc1.deposit(25.85);
        acc2.deposit(500.00);
        // -Rút khỏi acc2 số tiền là 430.75, mức phí 1.50.
        acc2.withdraw(430.75, 1.50);
        // -Tính tiền lãi cho acc3.
        acc3.addInterest();
        // -Xuất thông tin của acc1, acc2, acc3 (kiểm tra lại kết quả).
        console.log(acc1.toString());
        console.log(acc2.toString());
        console.log(acc3.toString());
        // -Chuyển tiền từ acc2 sang cho acc1 số tiền là 100.00.
        acc2.transfer(acc1, 100.00);
        // -Xuất thông tin của acc1, acc2 (kiểm tra lại kết quả).
        console.log(acc1.toString());
        console.log(acc2.toString());
    };
    return Account;
}());
Account.main();
