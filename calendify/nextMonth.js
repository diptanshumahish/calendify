"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currentVariable_1 = __importDefault(require("./currentVariable"));
const getCalendar_1 = __importDefault(require("./getCalendar"));
const nextMonth = ({ startDateMonday = false, }) => {
    if (startDateMonday === undefined) {
        startDateMonday = false;
    }
    var currentYear;
    var currentmonth;
    if (currentVariable_1.default.month == 11) {
        currentVariable_1.default.month = 0;
        currentVariable_1.default.year++;
        currentYear = currentVariable_1.default.year;
        currentmonth = currentVariable_1.default.month;
    }
    else {
        currentVariable_1.default.month++;
        currentYear = currentVariable_1.default.year;
        currentmonth = currentVariable_1.default.month;
    }
    return (0, getCalendar_1.default)({
        month: currentmonth,
        startDateMonday: startDateMonday,
        year: currentYear,
    });
};
exports.default = nextMonth;
//# sourceMappingURL=nextMonth.js.map