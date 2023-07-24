import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { SERVER_PORT } from "./consts";
import userRouter from "./routes/usersRoutes";
import hobbiesRouter from "./routes/hobbiesRoutes";
import cors from "cors";

const app: express.Express = express();

app.listen(SERVER_PORT, () => {
  console.log("Server listens on 8000");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("common"));

app.use("/user", userRouter);
app.use("/hobbies", hobbiesRouter);
