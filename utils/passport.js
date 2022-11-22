const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  
  async function(req, email, password, done) {
    let user = await User.findOne({
      where: {
        email: email
      }
    });

    let verify;
    if (user != null) {
      verify = await user.checkPassword(password);
    }

    if (!user) {
      return done(null, false, { message: 'Incorrect email!' });
    } else if (!verify) {
      return done(null, false, { message: 'Incorrect password!' });
    }
    return done(null, user)
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
 done(null, user);
});

module.exports = passport;