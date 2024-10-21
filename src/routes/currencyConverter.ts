import { Router } from "express";
import { convertCurrencyController, fetchCurrencyListController } from "../controllers/currencyConverter";

let currencyRouter = Router();
currencyRouter.get("/convert", convertCurrencyController);
currencyRouter.get("/list-currency", fetchCurrencyListController);
export default currencyRouter;
