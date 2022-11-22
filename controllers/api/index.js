const router = require('express').Router();
//const forumRoutes = require('./forumRoutes.js');
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

//router.use('/forums', forumRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
module.exports = router;
