"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentStatus = () => {
    const date = new Date();
    return {
        "date": date.getUTCDay(),
        "day": date.getDate(),
        "month": date.getMonth(),
        "year": date.getFullYear(),
    };
};
exports.default = currentStatus;
//# sourceMappingURL=currentStatus.js.map