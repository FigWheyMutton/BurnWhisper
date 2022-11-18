const router = require('express').Router();
const forumRoutes = require('./forumRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/forums', forumRoutes);
router.use('/users', userRoutes);

module.exports = router;
