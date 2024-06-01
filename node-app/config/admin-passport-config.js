// admin-passport-config.js
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');

passport.use('admin-local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const admin = await Admin.findOne({ email });

        if (!admin) {
            return done(null, false, { message: 'Incorrect email.' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, admin);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((admin, done) => {
    done(null, admin.id);
});

passport.deserializeUser((id, done) => {
    Admin.findById(id, (err, admin) => {
        done(err, admin);
    });
});
