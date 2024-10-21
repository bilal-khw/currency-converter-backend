// import { Request, Response } from "express";
import { Request, Response } from "express";
import { convertCurrency, fetchCurrencyList } from "../services/currencyAPI";
export const convertCurrencyController = async (
  req: Request,
  res: Response
) => {
  const { base, target, amount } = req.query;
  try {
    if (!base || !target || !amount) {
      res
        .status(400)
        .json({ message: "Base, target, and amount are required" });
    }

    const { convertedAmount, rate } = await convertCurrency(
      String(base),
      String(target),
      Number(amount)
    );

    res.json(convertedAmount);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
export const fetchCurrencyListController = async (
  req: Request,
  res: Response
) => {
  // Code to convert currency
  try {
    const currencies = await fetchCurrencyList();
    res.status(200).json(currencies);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
