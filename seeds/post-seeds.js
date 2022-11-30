const { Post } = require('../models');

const postData = require('./post.json')

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;