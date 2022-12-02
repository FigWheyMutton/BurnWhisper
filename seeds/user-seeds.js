const { User } = require('../models');

const userData = [
    {
        username: "figwhey",
        email: "alex@gmail.com",
        password: "1234",
        bio: "hello this is bio"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;