import JWT from "passport-jwt";
import User from "../Models/user.js";

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

export const passportAuth = (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    })
  );
};
