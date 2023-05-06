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
exports.EditPostProperty = void 0;
const PropertyAdsModel_1 = __importDefault(require("../../Models/PropertyAdsModel"));
const EditPostProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, 
        // poster,
        type, quantity, quantityTaken, preferedRentType, monthlyPrice, weeklyPrice, dailyPrice, deposit, depositPrice, description, posterType, address, images, videos, amenities, agentInfo, socialPreferences, createdAt, ratings, shareLink, } = req.body;
        console.log(deposit);
        const existingProperty = yield PropertyAdsModel_1.default.findById(id);
        if (!existingProperty) {
            return res
                .status(400)
                .json({ message: "Property not exists", status: false });
        }
        else {
            existingProperty.set({
                //id: admin._id,
                //poster,
                type,
                quantity: +quantity,
                quantityTaken: +quantityTaken,
                preferedRentType,
                monthlyPrice: +monthlyPrice,
                weeklyPrice: +weeklyPrice,
                dailyPrice: +dailyPrice,
                deposit: deposit === "true",
                depositPrice: +depositPrice,
                description,
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
            const updatedProperty = yield existingProperty.save();
            return res.status(201).json({
                message: "Property updated successfully",
                property: updatedProperty,
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
exports.EditPostProperty = EditPostProperty;
