class Product{
    private description: string;
    private productID: string;
    private price: number;

    constructor(description: string);
    constructor(description: string, productID: string);
    constructor(description: string, productID: string, price: number);
    constructor(...arr: any[]){
        if(arr.length === 2){
            this.description = arr[0];
            this.productID = arr[1];
        } else if(arr.length === 3){
            this.description = arr[0];
            this.productID = arr[1];
            this.price = arr[2];
        } else if(arr === arr[1]){
            this.description = arr[0];
        }
    }

    getDescription(): string{
        return this.description;
    }

    getProductID(): string{
        return this.productID;
    }

    getPrice(): number{
        return this.price;
    }

    setDescription(description: string){
        this.description = description;
    }

    setProductID(productID: string){
        this.productID = productID;
    }

    setPrice(price: number){
        this.price = price;
    }

    toString(): string{
        return `Product (description: ${this.description}, productID: ${this.productID}, price: ${this.price})`
    }
}

const p = new Product("fruit", "123", 423);
console.log(p.toString());


class OrderDetail{
    private quatity: number;
    private product: Product;

    constructor(quatity: number);
    constructor(quatity: number, product: Product);
    constructor(...arr: any[]){
        if(arr.length === 1){
            this.quatity = arr[0];
        } else if(arr.length === 2){
            this.quatity = arr[0];
            this.product = arr[1];
        }
    }

    getquatity(): number{
        return this.quatity;
    }

    getProduct(): Product{
        return this.product
    }

    setquatity(quatity: number = 0){
        this.quatity = quatity;
    }

    setProduct(product: Product){
        this.product = product;
    }

    calcTotalPrice(): number{
        return this.quatity * this.product.getPrice();
    }

    toString(): string{
        return `Order Detail (quatity: ${this.quatity}, product: ${this.product.toString()}, totalPrice: ${this.calcTotalPrice()})`;;
    }
}

const od = new OrderDetail(13, new Product("pastry", "3113", 459));
console.log(od.toString())

class Order{
    private orderID: number;
    private orderDate: Date;
    lineItems: OrderDetail[];
    private count: number;

    constructor(orderID: number);
    constructor(orderID: number, orderDate: Date);
    constructor(orderID: number, orderDate: Date, lineItems: OrderDetail[]);
    constructor(orderID: number, orderDate: Date, lineItems: OrderDetail[], count);
    constructor(...arr: any[]){
        if(arr.length === 1){
            this.orderID = arr[0];
        }
        else if (arr.length === 2){
            this.orderID = arr[0];
            this.orderDate = arr[1];
        } else if (arr.length === 3){
            this.orderID = arr[0];
            this.orderDate = arr[1];
            this.lineItems = arr[2];
        } else if (arr.length === 4){
            this.orderID = arr[0];
            this.orderDate = arr[1];
            this.lineItems = arr[2];
            this.count = arr[3];
        }
    }

    getOrderID(): number{
        return this.orderID;
    }

    getOrderDate(): Date{
        return this.orderDate;
    }

    getLineItems(): OrderDetail[]{
        return this.lineItems;
    }

    getCount(): number{
        return this.count;
    }

    setOrderID(orderID: number){
        this.orderID = orderID;
    }

    setOrderDate(orderDate: Date){
        this.orderDate = orderDate;
    }

    setLineItems(lineItems: OrderDetail[]){
        this.lineItems = lineItems;
    }

    calcTotalCharge(): number{
        let totalPrices = 0;
        this.lineItems.forEach((item)=>{let sum = 0; sum += item.calcTotalPrice(); totalPrices = sum;})
        return totalPrices * this.count;
    }

    addLineItem(product: Product, quatity: number){
        this.lineItems.push(new OrderDetail(quatity, product));
    }

    toString(): string{
        return `Order (orderID: ${this.orderID}, orderDate: ${this.orderDate}, lineItems: [${this.lineItems}], count: ${this.count}, totalCharge: ${this.calcTotalCharge()})`;
    }
}

const order = new Order(1234, new Date(), [
    new OrderDetail(13, new Product("pastry", "3113", 459)),
    new OrderDetail(13, new Product("puff pastry", "3136", 549))
], 9);

order.addLineItem(new Product("carbonara", "12890", 789), 8);
console.log(order.toString());