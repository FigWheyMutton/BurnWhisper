const { Post } = require('../models');

const postData = [
    {
        post_text: "This is the name of the post",
        user_id: 1,
    },
    {
        post_text: "hello im alex",
        user_id: 1,
    }
]


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;