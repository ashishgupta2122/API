const connectDB = require("./db/connect");
const Product = require("./model/product");

const uri = "mongodb+srv://Ashish:kHsU6Og8Al4g51Ml@cluster0.jfy7hhi.mongodb.net/";

const ProductJson = require("./products.json")

const start = async () => {
    try {
        await connectDB(uri);
        await Product.deleteMany();
        await Product.create(ProductJson);
    } catch (error) {
        console.log(error);
    }
}

start();

