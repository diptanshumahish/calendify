"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const currentVariable_1 = __importDefault(require("./currentVariable"));
const getCalendar = (month, year) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //array to return.
    var ret = {
        "month": "",
        "year": 0,
        "days": [],
        "today": currentVariable_1.default.day,
        "day": days[currentVariable_1.default.date]
    };
    if (month < 0 || month > 11) {
        console.error("Entered year is out of range [0,11]");
        return null;
    }
    //setting constants
    var firstDayOfMonth;
    var lastDayOfTheMonth;
    var lastDayOfLastMonth;
    var lastDay;
    let conString = '';
    if (year == undefined || month == undefined) {
        lastDayOfTheMonth = new Date(currentVariable_1.default.year, currentVariable_1.default.month + 1, 0).getDate();
        firstDayOfMonth = new Date(currentVariable_1.default.year, currentVariable_1.default.month, 1).getDay();
        lastDayOfLastMonth = new Date(currentVariable_1.default.year, currentVariable_1.default.month, 0).getDate();
        lastDay = new Date(currentVariable_1.default.year, currentVariable_1.default.month, lastDayOfTheMonth).getDay();
        ret.year = currentVariable_1.default.year;
        ret.month = months[currentVariable_1.default.month];
    }
    else {
        lastDayOfTheMonth = new Date(year, month + 1, 0).getDate();
        firstDayOfMonth = new Date(year, month, 1).getDay();
        lastDayOfLastMonth = new Date(year, month, 0).getDate();
        lastDay = new Date(year, month, lastDayOfTheMonth).getDay();
        ret.year = year;
        ret.month = months[month];
    }
    for (let i = firstDayOfMonth; i > 0; i--) {
        ret.days.push({ "date": lastDayOfLastMonth - i + 1, "type": "previousMonth", "id": conString.concat(i.toString(), currentVariable_1.default.month.toString(), currentVariable_1.default.year.toString()) });
    }
    for (let i = 1; i < lastDayOfTheMonth + 1; i++) {
        ret.days.push({ "date": i, "type": "activeMonth", "id": conString.concat(i.toString(), currentVariable_1.default.month.toString(), currentVariable_1.default.year.toString()) });
    }
    for (let i = lastDay; i < 6; i++) {
        ret.days.push({ "date": i - lastDay + 1, "type": "nextMonth", "id": conString.concat(i.toString(), currentVariable_1.default.month.toString(), currentVariable_1.default.year.toString()) });
    }
    return ret;
};
exports.default = getCalendar;
//# sourceMappingURL=getCalendar.js.map