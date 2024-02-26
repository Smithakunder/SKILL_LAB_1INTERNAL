// authController.js
const passport = require('passport');


// Google authentication
const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

const googleCallback = (req, res) => {
  // Handle callback after Google has authenticated the user
  res.send('Google authentication callback');
};

// Facebook authentication
const facebookLogin = passport.authenticate('facebook-token');

const facebookCallback = (req, res) => {
  // Handle callback after Facebook has authenticated the user
  res.send('Facebook authentication callback');
};

export { googleLogin, googleCallback, facebookLogin, facebookCallback };
