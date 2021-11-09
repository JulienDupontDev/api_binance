import routes from "./src/routes/index.js";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

console.log("Listening on port:", port);

app.use("/api/prices", routes.prices);
app.use(express.json());
app.use(cors());

app.listen(port);

export default app;
