
class Calendify {
    //get current data
    static current = Calendify.getCurrenStatus();
    //get calendar
    static getCalendar(month, year) {
        //Months here to get from the index returned from the current input.
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        //array to return.
        var ret = {
            "month": "",
            "year": 0,
            "days": [],
            "today": this.current.day,
            "day": days[this.current.date]
        };
        //checking data types and range in case of data entered.
        if (typeof (month) != "number" && month != undefined) {
            console.error("Month must be an integer, For example for January use '0' as a parameter and '11' for December");
            return "Error";
        }
        if (typeof (year) != "number" && year != undefined) {
            console.error("Year must be an integer");
            return "Error";
        }
        if (month < 0 || month > 11) {
            console.error("Entered year is out of range [0,11]");
            return "Error";
        }
        //setting constants
        var firstDayOfMonth;
        var lastDayOfTheMonth;
        var lastDayOfLastMonth;
        var lastDay;

        if (year == undefined || month == undefined) {
            lastDayOfTheMonth = new Date(this.current.year, this.current.month + 1, 0).getDate();


            firstDayOfMonth = new Date(this.current.year, this.current.month, 1).getDay();


            lastDayOfLastMonth = new Date(this.current.year, this.current.month, 0).getDate();


            lastDay = new Date(this.current.year, this.current.month, lastDayOfTheMonth).getDay();


            ret.year = this.current.year;
            ret.month = months[this.current.month];
        } else {
            lastDayOfTheMonth = new Date(year, month + 1, 0).getDate();
            firstDayOfMonth = new Date(year, month, 1).getDay();
            lastDayOfLastMonth = new Date(year, month, 0).getDate();
            lastDay = new Date(year, month, lastDayOfTheMonth).getDay();
            ret.year = year;
            ret.month = months[month];
        }
        for (let i = firstDayOfMonth; i > 0; i--) {
            ret.days.push({ "date": lastDayOfLastMonth - i + 1, "type": "previousMonth" });

        }
        for (let i = 1; i < lastDayOfTheMonth + 1; i++) {
            ret.days.push({ "date": i, "type": "activeMonth" });
        }
        for (let i = lastDay; i < 6; i++) {
            ret.days.push({ "date": i - lastDay + 1, "type": "nextMonth" });

        }
        return ret;
    }

    //get current updates
    static getCurrenStatus() {
        const date = new Date();
        return {
            "date": date.getUTCDay(),
            "day": date.getDate(),
            "month": date.getMonth(),
            "year": date.getFullYear(),

        }
    }
    static prevMonth() {
        var currentYear;
        var currentmonth;
        if (this.current.month == 0) {
            this.current.month = 11;
            this.current.year--;
            currentYear = this.current.year;
            currentmonth = this.current.month;
        } else {
            this.current.month--;
            currentYear = this.current.year;
            currentmonth = this.current.month;

        }

        return Calendify.getCalendar(currentmonth, currentYear);
    }
    static nextMonth() {
        var currentYear;
        var currentmonth;
        if (this.current.month == 11) {
            this.current.month = 0;
            this.current.year++;
            currentYear = this.current.year;
            currentmonth = this.current.month;
        } else {
            this.current.month++;
            currentYear = this.current.year;
            currentmonth = this.current.month;

        }

        return Calendify.getCalendar(currentmonth, currentYear);
    }
    //returns string type for month and year as well
    static getDate() {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const temp = Calendify.getCurrenStatus();
        return {
            "day": days[temp.date],
            "month": months[temp.month],
            "year": temp.year,
            "date": temp.day
        }

    }

}

module.exports = Calendify;