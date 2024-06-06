const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Admin = require('../models/Admin');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.ADMIN_PRIVATE_KEY; // Use the environment variable

module.exports = (passport) => {
  passport.use(
    'jwt-admin',
    new JwtStrategy(opts, (jwt_payload, done) => {
      Admin.findById(jwt_payload.id)
        .then((admin) => {
          if (admin) {
            return done(null, admin);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
