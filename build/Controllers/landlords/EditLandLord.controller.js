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
exports.EditLandLord = void 0;
const LandLordModel_1 = __importDefault(require("../../Models/LandLordModel"));
const EditLandLord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, firstName, lastName, email, password, gender, phone, country, fcmToken, } = req.body;
    if (!firstName ||
        !lastName ||
        !gender ||
        !phone ||
        !country ||
        !fcmToken ||
        !email ||
        !password) {
        return res.status(400).json({ message: "invalid credentials" });
    }
    try {
        const existingLandLord = yield LandLordModel_1.default.findById(id);
        if (existingLandLord) {
            existingLandLord.firstName = firstName;
            existingLandLord.lastName = lastName;
            existingLandLord.email = email;
            existingLandLord.password = password;
            existingLandLord.gender = gender;
            existingLandLord.phone = phone;
            existingLandLord.country = country;
            existingLandLord.fcmToken = fcmToken;
            const editedLandLord = yield existingLandLord.save();
            return res.status(201).json({
                message: "landLord edited successfully",
                status: true,
                LandLord: editedLandLord,
            });
        }
        else {
            return res
                .status(409)
                .json({ message: "LandLord not found", status: false });
        }
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Internal server error", status: false });
    }
});
exports.EditLandLord = EditLandLord;
