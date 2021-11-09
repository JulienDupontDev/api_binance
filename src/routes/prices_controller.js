import { Router } from "express";
import { getBinancePrices } from "../services/binance_service.js";

const router = Router();

router.get("/", async (req, res) => {
  res.send(await getBinancePrices());
});

export default router;
