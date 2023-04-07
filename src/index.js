import express from "express";
import passport from "passport";
import { connect } from "./config/database.js";
import apiRoutes from "./routes/index.js";
import { passportAuth } from "./config/jwt-middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.use(passport.initialize());
passportAuth(passport);

app.listen(3001, async () => {
  console.log("Server Started on PORT:", 3001);
  await connect();
  console.log("MongoDB connected");
});
