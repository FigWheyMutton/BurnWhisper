const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req,res) => {
    try {
        const allRoutes = await User.findAll();
        const homeRoute = allRoutes.map((userData) => userData.get({plain: true}));
        console.log(homeRoute)
        res.render('homepage', {homeRoute});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;