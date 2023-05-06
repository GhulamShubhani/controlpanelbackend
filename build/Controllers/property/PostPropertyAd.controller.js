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
exports.PostProperty = void 0;
const LandLordModel_1 = __importDefault(require("../../Models/LandLordModel"));
const PropertyAdsModel_1 = __importDefault(require("../../Models/PropertyAdsModel"));
const PostProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { type, quantity, quantityTaken, preferedRentType, monthlyPrice, weeklyPrice, dailyPrice, deposit, depositPrice, description, posterType, address, images, videos, amenities, agentInfo, socialPreferences, createdAt, ratings, shareLink, } = req.body;
        const admin = req.admin;
        quantity = +quantity;
        quantityTaken = +quantityTaken;
        monthlyPrice = +monthlyPrice;
        weeklyPrice = +weeklyPrice;
        dailyPrice = +dailyPrice;
        depositPrice = +depositPrice;
        deposit = deposit === "true";
        const user = yield LandLordModel_1.default.findOne({ email: agentInfo.email });
        console.log(admin);
        const poster = { _id: admin === null || admin === void 0 ? void 0 : admin._id, name: admin === null || admin === void 0 ? void 0 : admin.name, email: admin === null || admin === void 0 ? void 0 : admin.email };
        if (!user) {
            return res
                .status(400)
                .json({ message: "Landlord not exists", status: false });
        }
        else {
            const property = new PropertyAdsModel_1.default({
                type,
                quantity,
                quantityTaken,
                preferedRentType,
                monthlyPrice,
                weeklyPrice,
                dailyPrice,
                deposit,
                depositPrice,
                description,
                poster,
                posterType,
                address,
                images,
                videos,
                amenities,
                agentInfo,
                socialPreferences,
                createdAt,
                ratings,
                shareLink,
            });
            property.save();
            console.log("saved");
            return res.status(201).json({
                message: "Property posted successfully",
                property,
                status: true,
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
exports.PostProperty = PostProperty;
