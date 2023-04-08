"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currentStatus_1 = __importDefault(require("./currentStatus"));
const getCurrentData = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const temp = (0, currentStatus_1.default)();
    return {
        "day": days[temp.date],
        "month": months[temp.month],
        "year": temp.year,
        "date": temp.day
    };
};
exports.default = getCurrentData;
//# sourceMappingURL=getDate.js.map