"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCurrencyListController = exports.convertCurrencyController = void 0;
const currencyAPI_1 = require("../services/currencyAPI");
const convertCurrencyController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { base, target, amount } = req.query;
    try {
        if (!base || !target || !amount) {
            res
                .status(400)
                .json({ message: "Base, target, and amount are required" });
        }
        const { convertedAmount, rate } = yield (0, currencyAPI_1.convertCurrency)(String(base), String(target), Number(amount));
        res.json(convertedAmount);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.convertCurrencyController = convertCurrencyController;
const fetchCurrencyListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Code to convert currency
    try {
        const currencies = yield (0, currencyAPI_1.fetchCurrencyList)();
        res.status(200).json(currencies);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
exports.fetchCurrencyListController = fetchCurrencyListController;
