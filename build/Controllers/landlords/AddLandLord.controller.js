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
exports.AddLandLord = void 0;
const LandLordModel_1 = __importDefault(require("../../Models/LandLordModel"));
const AddLandLord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, phone, gender, country } = req.body;
    if (!firstName &&
        !lastName &&
        !email &&
        !password &&
        !phone &&
        !gender &&
        !country) {
        return res.status(400).json({ message: "invalid credentials" });
    }
    try {
        const ExistingLandLord = yield LandLordModel_1.default.findOne({ email });
        if (ExistingLandLord) {
            return res.status(409).json({
                message: "LandLord with this email already exists",
                status: false,
            });
        }
        else {
            const newLandLord = new LandLordModel_1.default({
                firstName,
                lastName,
                email,
                password,
                phone,
                gender,
                country,
            });
            newLandLord.save();
            return res.status(201).json({
                message: "landLord created successfully",
                status: true,
                LandLord: newLandLord,
            });
        }
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Internal server error", status: false });
    }
});
exports.AddLandLord = AddLandLord;
