import { ReturnCalendar } from "./index.d";
interface CheckWeekStart {
    startDateMonday: boolean;
}
declare const prevMonth: ({ startDateMonday, }: CheckWeekStart) => ReturnCalendar;
export default prevMonth;
