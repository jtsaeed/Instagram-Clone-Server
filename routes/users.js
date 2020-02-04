const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');

router.post('/register', async (req, res) => {
    const {email, password, username, avatarPath} = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);
        const user = new user({ email, password: hash, username, avatarPath});
        await user.save();
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post('/login', (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email: email });
        const valid = await bcrypt.compare(password, user.password);

        if (valid) {
            res.status(200).send(user);
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
});

module.exports = router;