"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
    fcmToken: { type: String },
});
const Admin = (0, mongoose_1.model)("Admin", adminSchema);
exports.default = Admin;
