"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const currencyConverter_1 = require("../controllers/currencyConverter");
let currencyRouter = (0, express_1.Router)();
currencyRouter.get("/convert", currencyConverter_1.convertCurrencyController);
currencyRouter.get("/list-currency", currencyConverter_1.fetchCurrencyListController);
exports.default = currencyRouter;
