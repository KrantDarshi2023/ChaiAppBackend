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
exports.loginUserController = exports.addUserController = void 0;
const userServices_1 = require("../services/userServices");
const addUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const data = yield (0, userServices_1.addUser)(user);
    res.send(data);
});
exports.addUserController = addUserController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const data = yield (0, userServices_1.loginUser)(user);
    res.send(data);
});
exports.loginUserController = loginUserController;
