import "express-async-errors";
import express from "express";
import routes from "./routes";
import { handleError } from "./middlewares/error.middleware";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(routes);

app.use(handleError);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Running at http://localhost:" + PORT));
