import React, {useState} from 'react'

function DaysContainer() {
    const [date, setDate] = useState()
    const dateAsStr = String(date)
    let dateAsDate = 'fail'
    const dateAsArr = dateAsStr.split('-');
    dateAsDate = new Date(dateAsArr[0], (dateAsArr[1]-1), dateAsArr[2])
    let date5 = String(dateAsDate)
    
    const today = new Date();
    let msPerDay = 24 * 60 * 60 * 1000
    let daysBetween = (today.getTime() - dateAsDate.getTime()) / msPerDay
    daysBetween = (Math.round(daysBetween))-1;

    return (
        <div>
            <h2>This is a title!</h2>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            <br />
            <p>Date entered:  {date}</p>
            <br />
            <p>Today's date:  {Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit"}).format(today)}</p>
            <p>date2: date entered as string: {dateAsStr}</p>
            
            <p>{date5}</p>
            <p>Days between: {daysBetween}</p>
        </div>
    )
}

export default DaysContainer
