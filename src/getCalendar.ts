import current from "./currentVariable";
import { ReturnCalendar } from "./index.d";


const getCalendar = (month:number,year:number):ReturnCalendar|null=>{
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //array to return.

    var ret: ReturnCalendar = {
        "month": "",
        "year": 0,
        "days": [],
        "today": current.day,
        "day": days[current.date]
    };
    if (month < 0 || month > 11) {
        console.error("Entered year is out of range [0,11]");
        return null;
    }
    //setting constants
    var firstDayOfMonth: number;
    var lastDayOfTheMonth: number;
    var lastDayOfLastMonth: number;
    var lastDay: number;
    let conString: string = '';

    if (year == undefined || month == undefined) {
        lastDayOfTheMonth = new Date(current.year, current.month + 1, 0).getDate();


        firstDayOfMonth = new Date(current.year, current.month, 1).getDay();


        lastDayOfLastMonth = new Date(current.year, current.month, 0).getDate();


        lastDay = new Date(current.year, current.month, lastDayOfTheMonth).getDay();


        ret.year = current.year;
        ret.month = months[current.month];
    } else {
        lastDayOfTheMonth = new Date(year, month + 1, 0).getDate();
        firstDayOfMonth = new Date(year, month, 1).getDay();
        lastDayOfLastMonth = new Date(year, month, 0).getDate();
        lastDay = new Date(year, month, lastDayOfTheMonth).getDay();
        ret.year = year;
        ret.month = months[month];
    }

    for (let i = firstDayOfMonth; i > 0; i--) {
        ret.days.push({ "date": lastDayOfLastMonth - i + 1, "type": "previousMonth", "id": conString.concat(i.toString(), current.month.toString(), current.year.toString()) });

    }
    for (let i = 1; i < lastDayOfTheMonth + 1; i++) {
        ret.days.push({ "date": i, "type": "activeMonth", "id": conString.concat(i.toString(), current.month.toString(), current.year.toString()) });
    }
    for (let i = lastDay; i < 6; i++) {
        ret.days.push({ "date": i - lastDay + 1, "type": "nextMonth", "id": conString.concat(i.toString(), current.month.toString(), current.year.toString()) });

    }
    return ret;

}
export default getCalendar;
