"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const environment_1 = require("./config/environment");
const SERVER_PORT = environment_1.PORT || 5000;
app_1.default.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});
