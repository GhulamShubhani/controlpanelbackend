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
exports.AdminSignupController = void 0;
const AdminModel_1 = __importDefault(require("../../Models/AdminModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const AdminSignupController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    // validate inputs
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please provide name, email, and password",
            status: false,
        });
    }
    try {
        const existingAdmin = yield AdminModel_1.default.findOne({ email });
        if (existingAdmin) {
            return res.status(409).json({
                message: "Admin with this email already exists",
                status: false,
            });
        }
        //hash the password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        //create the new admin
        const newAdmin = new AdminModel_1.default({
            name,
            email,
            password: hashedPassword,
        });
        newAdmin.save();
        return res.status(201).json({
            message: "Admin signup successful",
            admin: newAdmin,
            status: true,
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error",
            status: false,
        });
    }
});
exports.AdminSignupController = AdminSignupController;
