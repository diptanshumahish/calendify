import { CurrentStatus } from "./index.d";

const currentStatus = (): CurrentStatus => {
    const date = new Date();
    return {
        "date": date.getUTCDay(),
        "day": date.getDate(),
        "month": date.getMonth(),
        "year": date.getFullYear(),

    }
}
export default currentStatus;