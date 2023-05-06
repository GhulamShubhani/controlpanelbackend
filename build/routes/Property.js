"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostPropertyAd_controller_1 = require("../Controllers/property/PostPropertyAd.controller");
const ViewPropertyAd_controller_1 = require("../Controllers/property/ViewPropertyAd.controller");
const getProperty_controller_1 = require("../Controllers/property/getProperty.controller");
const Auth_1 = require("../middleware/Auth");
const EditPropertyAd_controller_1 = require("../Controllers/property/EditPropertyAd.controller");
const router = (0, express_1.default)();
router.post("/postProperty", Auth_1.authenticate, PostPropertyAd_controller_1.PostProperty);
router.get("/allProperties", ViewPropertyAd_controller_1.ViewProperty);
router.post("/getProperty", getProperty_controller_1.GetProperty);
router.post("/editProperty", Auth_1.authenticate, EditPropertyAd_controller_1.EditPostProperty);
exports.default = router;
