const express = require("express");
const { saveUser } = require("../database/users");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/register", async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    };
    const savedUser = await saveUser(user);
    res.status(201).json({
        user: savedUser
    })
})

module.exports = {
    router
}