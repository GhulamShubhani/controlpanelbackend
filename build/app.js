"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const Admin_1 = __importDefault(require("./routes/Admin"));
const LandLord_1 = __importDefault(require("./routes/LandLord"));
const Property_1 = __importDefault(require("./routes/Property"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = process.env.PORT || 8000;
const server = process.env.CONNECT_DATABASE;
app.use(Admin_1.default);
app.use(LandLord_1.default);
app.use(Property_1.default);
mongoose_1.default.connect(server).then(() => {
    app.listen(PORT, () => {
        console.log(`server is started ${server} at ${PORT}`);
    });
});
