import { ReturnCalendar } from "./index.d";
interface Props {
    month?: number;
    year?: number;
    startDateMonday?: boolean;
}
declare const getCalendar: ({ month, startDateMonday, year, }: Props) => ReturnCalendar;
export default getCalendar;
