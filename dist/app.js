"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const morgan_body_1 = __importDefault(require("morgan-body"));
const express_1 = __importDefault(require("express"));
const environment_1 = require("./config/environment");
const currencyConverter_1 = __importDefault(require("./routes/currencyConverter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.use((0, morgan_1.default)("dev"));
(0, morgan_body_1.default)(app, {
    prettify: true,
    logReqUserAgent: true,
    logReqDateTime: true,
});
// Routes
app.use(`${environment_1.API_PREFIX}`, currencyConverter_1.default);
exports.default = app;
