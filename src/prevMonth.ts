import current from "./currentVariable";
import getCalendar from "./getCalendar";
import { ReturnCalendar } from "./index.d";

const prevMonth = ():ReturnCalendar|null=>{
    var currentYear;
    var currentmonth;
    if (current.month == 0) {
        current.month = 11;
        current.year--;
        currentYear = current.year;
        currentmonth = current.month;
    } else {
        current.month--;
        currentYear = current.year;
        currentmonth = current.month;

    }

    return getCalendar(currentmonth, currentYear);
}
export default prevMonth;