"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXTERNAL_API = exports.API_KEY = exports.HOST = exports.API_PREFIX = exports.DB_URI = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
_a = process.env, exports.PORT = _a.PORT, exports.DB_URI = _a.DB_URI, exports.API_PREFIX = _a.API_PREFIX, exports.HOST = _a.HOST, exports.API_KEY = _a.API_KEY, exports.EXTERNAL_API = _a.EXTERNAL_API;
