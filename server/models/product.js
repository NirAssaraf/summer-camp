class Product {
    constructor( productID, productName, productPrice,productQuntity,productStatus,productCoupon) {
            this.id="";
            this.productName = productName;
            this.productID =productID;
            this.productPrice=productPrice;
            this.productQuntity=productQuntity;
            this.productStatus=productStatus;
            this.productCoupon=productCoupon;
            this.photoId="";
        }
    }
    
    module.exports = Product;