const express = require("express");
const router = express.Router();
const Note = require("../models/SignUpModels")

router.route("/create").post((req,res) =>{
    const    username = req.body.username,
    const    address = req.body.address,
    const    date = req.body.date,
    const    order = req.body.order,
    const newOrder = new NewOrder({
        username,
        address,
        date,
        order
    });

    newOrder.save()
})

module.exports = router;