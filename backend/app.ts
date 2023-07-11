import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { authMiddleware } from "./auth/authMiddleware";
import { authRouter } from "./auth/authRouter";
import { errorMiddleware } from "./config/errorMiddleware";
import { logMiddleware } from "./config/logMiddleware";
import { notFoundRouter } from "./config/notFoundRouter";
import { router } from "./router";

export const app = express();

app.use(logMiddleware);
app.use(json());
app.use(cors());
app.use("/auth", authRouter);
app.use(authMiddleware);
app.use(router);
app.use(notFoundRouter);
app.use(errorMiddleware);
