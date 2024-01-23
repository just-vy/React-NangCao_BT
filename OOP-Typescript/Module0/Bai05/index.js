var Product = /** @class */ (function () {
    function Product() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 2) {
            this.description = arr[0];
            this.productID = arr[1];
        }
        else if (arr.length === 3) {
            this.description = arr[0];
            this.productID = arr[1];
            this.price = arr[2];
        }
        else if (arr === arr[1]) {
            this.description = arr[0];
        }
    }
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.getProductID = function () {
        return this.productID;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
    };
    Product.prototype.setProductID = function (productID) {
        this.productID = productID;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.toString = function () {
        return "Product (description: ".concat(this.description, ", productID: ").concat(this.productID, ", price: ").concat(this.price, ")");
    };
    return Product;
}());
var p = new Product("fruit", "123", 423);
console.log(p.toString());
var OrderDetail = /** @class */ (function () {
    function OrderDetail() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1) {
            this.quatity = arr[0];
        }
        else if (arr.length === 2) {
            this.quatity = arr[0];
            this.product = arr[1];
        }
    }
    OrderDetail.prototype.getquatity = function () {
        return this.quatity;
    };
    OrderDetail.prototype.getProduct = function () {
        return this.product;
    };
    OrderDetail.prototype.setquatity = function (quatity) {
        if (quatity === void 0) { quatity = 0; }
        this.quatity = quatity;
    };
    OrderDetail.prototype.setProduct = function (product) {
        this.product = product;
    };
    OrderDetail.prototype.calcTotalPrice = function () {
        return this.quatity * this.product.getPrice();
    };
    OrderDetail.prototype.toString = function () {
        return "Order Detail (quatity: ".concat(this.quatity, ", product: ").concat(this.product.toString(), ", totalPrice: ").concat(this.calcTotalPrice(), ")");
        ;
    };
    return OrderDetail;
}());
var od = new OrderDetail(13, new Product("pastry", "3113", 459));
console.log(od.toString());
var Order = /** @class */ (function () {
    function Order() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1) {
            this.orderID = arr[0];
        }
        else if (arr.length === 2) {
            this.orderID = arr[0];
            this.orderDate = arr[1];
        }
        else if (arr.length === 3) {
            this.orderID = arr[0];
            this.orderDate = arr[1];
            this.lineItems = arr[2];
        }
        else if (arr.length === 4) {
            this.orderID = arr[0];
            this.orderDate = arr[1];
            this.lineItems = arr[2];
            this.count = arr[3];
        }
    }
    Order.prototype.getOrderID = function () {
        return this.orderID;
    };
    Order.prototype.getOrderDate = function () {
        return this.orderDate;
    };
    Order.prototype.getLineItems = function () {
        return this.lineItems;
    };
    Order.prototype.getCount = function () {
        return this.count;
    };
    Order.prototype.setOrderID = function (orderID) {
        this.orderID = orderID;
    };
    Order.prototype.setOrderDate = function (orderDate) {
        this.orderDate = orderDate;
    };
    Order.prototype.setLineItems = function (lineItems) {
        this.lineItems = lineItems;
    };
    Order.prototype.calcTotalCharge = function () {
        var totalPrices = 0;
        this.lineItems.forEach(function (item) { var sum = 0; sum += item.calcTotalPrice(); totalPrices = sum; });
        return totalPrices * this.count;
    };
    Order.prototype.addLineItem = function (product, quatity) {
        this.lineItems.push(new OrderDetail(quatity, product));
    };
    Order.prototype.toString = function () {
        return "Order (orderID: ".concat(this.orderID, ", orderDate: ").concat(this.orderDate, ", lineItems: [").concat(this.lineItems, "], count: ").concat(this.count, ", totalCharge: ").concat(this.calcTotalCharge(), ")");
    };
    return Order;
}());
var order = new Order(1234, new Date(), [
    new OrderDetail(13, new Product("pastry", "3113", 459)),
    new OrderDetail(13, new Product("puff pastry", "3136", 549))
], 9);
order.addLineItem(new Product("carbonara", "12890", 789), 8);
console.log(order.toString());
