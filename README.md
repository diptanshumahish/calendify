![Calendify image](https://github.com/diptanshumahish/calendify-demo/raw/main/public/assets/banner.png)


# calendify
This package returns an object containing dates of the current month in a format of `SUN MON TUE WED THU FRI SAT`, it gives 42 dates including previous and next month dates and can be easiy arranged in 7(columns) X 6(rows) format using css.


### Installation

```
$ npm install --save calendify
$ yarn add calendify
```


## Demo 
Here's a mini demo on a basic implementation of this package
```jsx
  import React from 'react';
  import Calendify from 'calendify';
  import {useEffect,useState} from 'react';


  function App(){
    const [dates,setDates]= useState([]);
    const [month,setMonth] = useState('');
    const [year,setYear]= useState('');
    const [date,setDate]= useState('');
    const [today,setToday]= useState('');


    useEffect(()=>{
            var temp = Calendify.getCalendar()

            setDates(temp.days);
            setMonth(temp.month);
            setYear(temp.year);
            setDate(temp.today);
            setToday(temp.day);

    },[])

    return (
      <div>
        <div>
            //Display month and year 
            <div id="upperPart">
                <div id="displayMonthAndYear">{month}{" "}{year}</div> // renders current month and current year
                <div>
                    <div onclick={
                        ()=>{
                            var temp = Calendify.prevMonth();
                                setDates(temp.days);
                                setMonth(temp.month);
                                setYear(temp.year);
                                setDate(temp.today);
                                setToday(temp.day);
                        }


                   }>Prev</div> // this method populates the fields with next month details
                    <div onclick={
                            ()=>{
                            var temp = Calendify.nextMonth();
                                setDates(temp.days);
                                setMonth(temp.month);
                                setYear(temp.year);
                                setDate(temp.today);
                                setToday(temp.day);
                        }
                    }>Next</div>
                </div>
            </div>
            <div id="renderCalendar">
                <div id="showDays"> //apply grid and add 7 columns
                    <div>SU</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>TH</div>
                    <div>F</div>
                    <div>S</div>
                </div>
                <div id="showDates"> // apply grid and add 7 columns
                    {
                        date.map((ele)=>{
                           if(ele.type=='previousMonth'){
                            return(
                                <div className="inactiveDays">{ele.date}</div>//previous month dates
                            )
                            if(ele.type=='activeMonth'){
                            return(
                                <div className="active">{ele.date}</div>//current month dates
                            )
                            if(ele.type=='nextMonth'){
                            return(
                                <div className="inactiveDays">{ele.date}</div>//next month dates
                            )
                           }
                        })
                    }
                </div>
            </div>
            <div id="showCurrent">
                <div>Today is {date} and its a {today}</div> // renders current date and day today 
            </div>
        </div>
      </div>
    );
  }
```
## Methods

This package has two main methods :

### getCalendar
``getCalendar()``:
This method returns an Object with the following objects.✨
*(optional: This method can accept a month and year as arguements as well, in case you need it.)*
1. `month`: A string of the current month.
2. `year`: A number of telling the current year.
3. `days`: An array of objects containing the dates in the format `{date:(date here),type:(whether it's current or previous or next month)}` .
4. `today`: A number telling the current day.
5. `day`: A string of the current day in the week.



### prevMonth
``prevMonth()``
This method populates the object with the previous month's data, though the present day fields will remain same.

### nextonth
``nextMonth()``
This method populates the object with the next month's data, though the present day fields will remain same.


### Sample data
Here's what the package returns:
```js
{
  month: 'April',
  year: 2023,
  days: [
    { date: 26, type: 'previousMonth' },
    { date: 27, type: 'previousMonth' },
    { date: 28, type: 'previousMonth' },
    { date: 29, type: 'previousMonth' },
    { date: 30, type: 'previousMonth' },
    { date: 31, type: 'previousMonth' },
    { date: 1, type: 'activeMonth' },
    { date: 2, type: 'activeMonth' },
    { date: 3, type: 'activeMonth' },
    { date: 4, type: 'activeMonth' },
    { date: 5, type: 'activeMonth' },
    { date: 6, type: 'activeMonth' },
    { date: 7, type: 'activeMonth' },
    { date: 8, type: 'activeMonth' },
    { date: 9, type: 'activeMonth' },
    { date: 10, type: 'activeMonth' },
    { date: 11, type: 'activeMonth' },
    { date: 12, type: 'activeMonth' },
    { date: 13, type: 'activeMonth' },
    { date: 14, type: 'activeMonth' },
    { date: 15, type: 'activeMonth' },
    { date: 16, type: 'activeMonth' },
    { date: 17, type: 'activeMonth' },
    { date: 18, type: 'activeMonth' },
    { date: 19, type: 'activeMonth' },
    { date: 20, type: 'activeMonth' },
    { date: 21, type: 'activeMonth' },
    { date: 22, type: 'activeMonth' },
    { date: 23, type: 'activeMonth' },
    { date: 24, type: 'activeMonth' },
    { date: 25, type: 'activeMonth' },
    { date: 26, type: 'activeMonth' },
    { date: 27, type: 'activeMonth' },
    { date: 28, type: 'activeMonth' },
    { date: 29, type: 'activeMonth' },
    { date: 30, type: 'activeMonth' },
    { date: 1, type: 'nextMonth' },
    { date: 2, type: 'nextMonth' },
    { date: 3, type: 'nextMonth' },
    { date: 4, type: 'nextMonth' },
    { date: 5, type: 'nextMonth' },
    { date: 6, type: 'nextMonth' }
  ],
  today: 2,
  day: 'Sunday'
}

```

## Demo website 
Check out the demo website ! **[calendify demo](https://calendify-demo.vercel.app/)**.


## Release notes:
Fixed a major bug:
The active month outputs have been corrected.


## Upcoming
Soon I'll be making this as a React Component that returns a Calendar with UI 😉





