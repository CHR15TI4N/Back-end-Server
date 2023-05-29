const express = require("express");
const {saveProduct, getAllProducts} = require("../database/products");
const router = express.Router();

let products = [
    {
        id: 1,
        name: "ps4",
        price: 2500
    },
    {
        id: 2, 
        name: "nintendo switch",
        price: 2300
    },
    {
        id: 3,
        name: "xbox",
        price: 2500
    }
]

router.get("/products", async (req, res) => {
    const moreThan = req.query.more_than ? Number(req.query.more_than) : 0;
    const products = await getAllProducts(moreThan);
    res.json({
        products
    })
})

router.get("/products/:id", (req, res) => {
    const id = Number(req.params.id)
    const product = products.find((product) => {
        return product.id === id;
    })
    res.json({
        product
    })
}) 

router.post("/products", async (req, res) => {
    const newProducts = {
        name: req.body.name,
        price: req.body.price
    }
    const savedProduct = await saveProduct(newProducts)
    res.json({
        product: savedProduct
    })
})

router.put("/products/:id", (req, res) => {
    const id = Number(req.params.id)
    const product = products.find((product) => {
        return product.id === id;
    })
    if(!product){
        res.status(404).send();
        return;
    }
    product.name = req.body.name;
    product.price = req.body.price;
    res.json({
        product
    })
})

router.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    products = products.filter((product) => {
        return product.id !== id;
    })
    res.status(204).send();
})

module.exports = {
    router
}