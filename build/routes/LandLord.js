"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AddLandLord_controller_1 = require("../Controllers/landlords/AddLandLord.controller");
const EditLandLord_controller_1 = require("../Controllers/landlords/EditLandLord.controller");
const ViewLandLord_controller_1 = require("../Controllers/landlords/ViewLandLord.controller");
const Landlord_controller_1 = require("../Controllers/landlords/Landlord.controller");
const router = express_1.default.Router();
router.get("/allLandLords", ViewLandLord_controller_1.viewLandLords);
router.post("/getLandlord", Landlord_controller_1.GetLandlord);
router.post("/addLandLord", AddLandLord_controller_1.AddLandLord);
router.post("/editLandLord", EditLandLord_controller_1.EditLandLord);
exports.default = router;
