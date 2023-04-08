import currentStatus from "./currentStatus";
import { usableCurrentInfo } from "./index.d";

const getCurrentData = (): usableCurrentInfo => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const temp = currentStatus();
    return {
        "day": days[temp.date],
        "month": months[temp.month],
        "year": temp.year,
        "date": temp.day
    }

}
export default getCurrentData;
