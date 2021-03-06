"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
var middlewares_1 = require("./middlewares");
require("./controllers/AuthController");
require("./controllers/RootController");
var app = express_1.default();
app.use(cookie_session_1.default({ keys: ['ldlkdd'] }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(AppRouter_1.AppRouter.getInstance());
app.use(middlewares_1.globalErrorHandler);
app.listen(process.env.PORT, function () {
    console.log('Listening on port ' + process.env.PORT);
    console.log(process.env.MONGOURI);
});
