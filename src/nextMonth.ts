import current from "./currentVariable";
import getCalendar from "./getCalendar";
import { ReturnCalendar } from "./index.d";

interface CheckWeekStart {
  startDateMonday: boolean;
}

const nextMonth = ({
  startDateMonday = false,
}: CheckWeekStart): ReturnCalendar => {
  if (startDateMonday === undefined) {
    startDateMonday = false;
  }
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

  return getCalendar({
    month: currentmonth,
    startDateMonday: startDateMonday,
    year: currentYear,
  });
};
export default nextMonth;
