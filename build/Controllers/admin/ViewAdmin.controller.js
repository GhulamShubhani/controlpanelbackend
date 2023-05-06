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
exports.ViewAdmins = void 0;
const AdminModel_1 = __importDefault(require("../../Models/AdminModel"));
const ViewAdmins = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const admin = yield AdminModel_1.default.findOne({ email });
        return res.status(200).json({ message: "all admins", admin, status: true });
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Internal server error", status: false });
    }
});
exports.ViewAdmins = ViewAdmins;
