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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCurrencyList = exports.convertCurrency = void 0;
// currencyService.ts
const axios_1 = __importDefault(require("axios"));
const environment_1 = require("../config/environment");
const convertCurrency = (base, target, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`${environment_1.EXTERNAL_API}latest?apikey=${environment_1.API_KEY}&base_currency=${base}&currencies=${target}`);
    const rate = response.data.data[target];
    const convertedAmount = rate * amount;
    return { rate, convertedAmount };
});
exports.convertCurrency = convertCurrency;
const fetchCurrencyList = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const response = yield axios_1.default.get(`${environment_1.EXTERNAL_API}currencies?apikey=${environment_1.API_KEY}`);
        const currencies = Object.keys(response.data.data);
        return currencies;
    }
    catch (error) {
        throw new Error(((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
    }
});
exports.fetchCurrencyList = fetchCurrencyList;
