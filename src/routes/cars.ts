import express, { Request, Response } from "express";

const router = express.Router();

const cars = [
  { make: "Toyota", model: "Corolla" },
  { make: "Honda", model: "Civic" },
  { make: "Ford", model: "Fusion" },
  { make: "Chevrolet", model: "Malibu" },
  { make: "Nissan", model: "Altima" },
];

router.get("/", (req: Request, res: Response) => {
  res.status(200).json(cars);
});

export default router;
