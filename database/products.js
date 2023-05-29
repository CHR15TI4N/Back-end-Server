const prisma = require("./prisma");

const getAllProducts = () => {
    return prisma.products.findMany({
        where: {
            price: {
                gt: moreThan,
            },
        },
    });
};

const saveProduct = (product) => {
    return prisma.products.create({
        data: product
    })
}

module.exports = {
    saveProduct,
    getAllProducts
}