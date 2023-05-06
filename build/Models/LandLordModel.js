"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const landlordSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    fcmToken: { type: String, required: true, default: "123" },
});
const LandLord = (0, mongoose_1.model)("landlord", landlordSchema);
exports.default = LandLord;
