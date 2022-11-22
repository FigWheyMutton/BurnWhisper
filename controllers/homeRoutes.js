const router = require('express').Router();
const { Comment } = require('../models');

router.get('/', async (req,res) => {
    try {
        const allComments = await Comment.findAll();
        const serializedComments = allComments.map((userData) => userData.get({plain: true}));
        console.log(serializedComments)
        res.render('homepage', {serializedComments});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;