import current from "./currentVariable";
import getCalendar from "./getCalendar";
import { ReturnCalendar } from "./index.d";

const nextMonth = ():ReturnCalendar|null=>{
    var currentYear;
    var currentmonth;
    if (current.month == 11) {
        current.month = 0;
        current.year++;
        currentYear = current.year;
        currentmonth = current.month;
    } else {
        current.month++;
        currentYear = current.year;
        currentmonth = current.month;

    }

    return getCalendar(currentmonth, currentYear);
}
export default nextMonth;