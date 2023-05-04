import { ReturnCalendar } from "./index.d";
interface CheckWeekStart {
    startDateMonday: boolean;
}
declare const nextMonth: ({ startDateMonday, }: CheckWeekStart) => ReturnCalendar;
export default nextMonth;
