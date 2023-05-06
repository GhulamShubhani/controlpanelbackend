"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ViewAdmins_controller_1 = require("../Controllers/admin/ViewAdmins.controller");
const AdminLogin_controller_1 = require("../Controllers/admin/AdminLogin.controller");
const AdminSingup_controller_1 = require("../Controllers/admin/AdminSingup.controller");
const router = express_1.default.Router();
router.get("/allAdmins", ViewAdmins_controller_1.ViewAdmins);
router.post("/adminSignup", AdminSingup_controller_1.AdminSignupController);
router.post("/adminLogin", AdminLogin_controller_1.AdminLoginController);
exports.default = router;
