'use strict';

const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
    res.json({
        message: "Welcome to our library!",
    })
});


module.exports = router;

