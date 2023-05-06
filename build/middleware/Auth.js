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
exports.authenticate = void 0;
const AdminModel_1 = __importDefault(require("../Models/AdminModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token;
        token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ message: "Authorization token missing" });
        }
        const userToken = jsonwebtoken_1.default.verify(token, "gscControlPanel");
        const admin = yield AdminModel_1.default.findOne({ email: userToken.email });
        if (!admin) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        req.admin = admin;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
});
exports.authenticate = authenticate;
