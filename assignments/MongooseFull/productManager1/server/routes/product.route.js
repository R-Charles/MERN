const ProductController = require("../controllers/product.contoroller");

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.put("/api/products/:id", ProductController.updateOneProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}