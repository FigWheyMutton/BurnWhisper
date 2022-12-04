const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "This is the name of the post",
        user_id: 1,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;