const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const GOOGLE_CLIENT_ID = '474618210793-uor3jm17ht5bv39sh6kgh4ettt7640e1.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }));

    passport.serializeUser((user, done) => {
        done(null, user)
    })
  
    passport.deserializeUser((user, done) => {
        done(null, user)
    })