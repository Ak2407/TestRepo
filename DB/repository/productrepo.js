const { fetchProduct } = require('../../controller/productctrl');
const ProductModel = require('../models/productmodel');


module.exports = {
    addProduct(productObj) {
        var promise = ProductModel.create(productObj);
        return promise;
    },
    async fetchProducts() {
        const result = await ProductModel.find();
        if (result) {
            return result;
        }
        else {
            return null;
        }
    },
    async fetchProduct(productid) {
        const result = await ProductModel.find({ _id: productid });
        if (result) {
            return result;
        }
        else {
            return null;
        }
    },
     deleteProduct(productObj) {
        var promise =  ProductModel.deleteOne({ _id: productObj._id });
        if(promise)
        {
            return promise;
        }
        else{
            return null}
    },
    async updateProduct(productObj) {
        const result = await ProductModel.updateOne({ _id: productObj._id }, productObj);
        if (result) {
            return result;
        }
        else {
            return null;
        }
    }
}