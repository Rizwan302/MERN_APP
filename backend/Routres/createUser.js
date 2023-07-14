const express = require('express')
const router = new express.Router();
const User = require("../models/User")
const mongoose = require('mongoose');


router.get('/', async (req, res) => {
    res.send('Hello World!')

})


router.get('/food', async (req, res) => {
    const fetch_data = await mongoose.connection.db.collection("food_item");
    let data = await fetch_data.find({}).toArray()
    res.send(data)
})


module.exports = router