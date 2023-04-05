import express from "express";
import { connect } from "./config/database.js";
import apiRoutes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, async () => {
  console.log("server started");
  await connect();
  console.log("MongoDB connected");
  app.use("/api", apiRoutes);
});
