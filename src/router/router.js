const express = require('express');
const router = express.Router();

router.get('/', async (request, response) => {
    try {
        response.status(201).send("Good to see you here");
    } catch (e) {
        response.status(400).send(e);
    }

});

module.exports = router;