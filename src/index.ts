import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 5002;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Express and TypeScript server!" });
});

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "up" });
});

import cars from "./routes/cars";
app.use("/cars", cars);

app.listen(port, () => {
  console.log(
    "\x1b[36m%s\x1b[0m",
    `[server]: Server is running at http://localhost:${port}`,
  );
});
