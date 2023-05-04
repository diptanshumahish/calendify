![Calendify image](https://calendify-demo.vercel.app/assets/banner.png)

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
  import {getCalendar,prevMonth,nextMonth} from 'calendify';
  import {useEffect,useState} from 'react';


  function App(){
    const [dates,setDates]= useState([]);
    const [month,setMonth] = useState('');
    const [year,setYear]= useState('');
    const [date,setDate]= useState('');
    const [today,setToday]= useState('');


    useEffect(()=>{
            var temp = getCalendar({})
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
                            var temp = prevMonth({});
                                setDates(temp.days);
                                setMonth(temp.month);
                                setYear(temp.year);
                                setDate(temp.today);
                                setToday(temp.day);
                        }


                   }>Prev</div> // this method populates the fields with next month details
                    <div onclick={
                            ()=>{
                            var temp = nextMonth({});
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

`getCalendar({})`:
This method returns an Object with the following objects.✨
_(optional: This method can accept a month , year and starting day of week (Monday) as arguements as well, in case you need it.)_

1. `month`: A string of the current month.
2. `year`: A number of telling the current year.
3. `days`: An array of objects containing the dates in the format `{date:(date here),type:(whether it's current or previous or next month)}` .
4. `today`: A number telling the current day.
5. `day`: A string of the current day in the week.

# optional parameters

```jsx
getCalendar({ startDateMonday: true,month:01,year:2023 }); // can take in optional parameters as month, year as numbers and startDateMonday  as boolean, if you don't need any parameters leave it empty 
getCalendar({})
```

### prevMonth

`prevMonth({})`
This method populates the object with the previous month's data, though the present day fields will remain same.

optional parameter : startDateMonday(boolean), this needd to be set true in case your calendar has a week starting from Monday, leave {} empty if your week starts from Sunday

### nextonth

`nextMonth({})`
This method populates the object with the next month's data, though the present day fields will remain same.

optional parameter : startDateMonday(boolean), this needd to be set true in case your calendar has a week starting from Monday, leave {} empty if your week starts from Sunday

### Sample data

Here's what the package returns:

```js
{
  month: 'April',
  year: 2023,
  days: [
    { date: 26, type: 'previousMonth', id: '632023' },
    { date: 27, type: 'previousMonth', id: '532023' },
    { date: 28, type: 'previousMonth', id: '432023' },
    { date: 29, type: 'previousMonth', id: '332023' },
    { date: 30, type: 'previousMonth', id: '232023' },
    { date: 31, type: 'previousMonth', id: '132023' },
    { date: 1, type: 'activeMonth', id: '132023' },
    { date: 2, type: 'activeMonth', id: '232023' },
    { date: 3, type: 'activeMonth', id: '332023' },
    { date: 4, type: 'activeMonth', id: '432023' },
    { date: 5, type: 'activeMonth', id: '532023' },
    { date: 6, type: 'activeMonth', id: '632023' },
    { date: 7, type: 'activeMonth', id: '732023' },
    { date: 8, type: 'activeMonth', id: '832023' },
    { date: 9, type: 'activeMonth', id: '932023' },
    { date: 10, type: 'activeMonth', id: '1032023' },
    { date: 11, type: 'activeMonth', id: '1132023' },
    { date: 12, type: 'activeMonth', id: '1232023' },
    { date: 13, type: 'activeMonth', id: '1332023' },
    { date: 14, type: 'activeMonth', id: '1432023' },
    { date: 15, type: 'activeMonth', id: '1532023' },
    { date: 16, type: 'activeMonth', id: '1632023' },
    { date: 17, type: 'activeMonth', id: '1732023' },
    { date: 18, type: 'activeMonth', id: '1832023' },
    { date: 19, type: 'activeMonth', id: '1932023' },
    { date: 20, type: 'activeMonth', id: '2032023' },
    { date: 21, type: 'activeMonth', id: '2132023' },
    { date: 22, type: 'activeMonth', id: '2232023' },
    { date: 23, type: 'activeMonth', id: '2332023' },
    { date: 24, type: 'activeMonth', id: '2432023' },
    { date: 25, type: 'activeMonth', id: '2532023' },
    { date: 26, type: 'activeMonth', id: '2632023' },
    { date: 27, type: 'activeMonth', id: '2732023' },
    { date: 28, type: 'activeMonth', id: '2832023' },
    { date: 29, type: 'activeMonth', id: '2932023' },
    { date: 30, type: 'activeMonth', id: '3032023' },
    { date: 1, type: 'nextMonth', id: '032023' },
    { date: 2, type: 'nextMonth', id: '132023' },
    { date: 3, type: 'nextMonth', id: '232023' },
    { date: 4, type: 'nextMonth', id: '332023' },
    { date: 5, type: 'nextMonth', id: '432023' },
    { date: 6, type: 'nextMonth', id: '532023' }
  ],
  today: 5,
  day: 'Wednesday'
}

```

## Demo website

Check out the demo website ! **[calendify demo](https://calendify-demo.vercel.app/)**.

## Release notes:

[new] Added an optional parameter of "startDayMonday", incase someone needs their week to start from Monday, instead of SUnday
Migrated to typescript
Fixed a major bug:
The active month outputs have been corrected.
[new] ADDED ID NUMBERS.

## Upcoming

Soon I'll be making this as a React Component that returns a Calendar with UI 😉
