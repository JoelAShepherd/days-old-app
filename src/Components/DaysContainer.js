import React, {useState} from 'react'
import {dayChange} from './index'
import {connect} from 'react-redux'

function DaysContainer(props) {
    const [date, setDate] = useState(1)
    const dateAsStr = String(props.aDate)
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
            <button onClick={()=>props.dayChange(date)}  >Go!</button>
            <br />
            <p>Date entered:  {props.aDate}</p>
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

const mapStateToProps = state => {
    return {
        aDate: state.aDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dayChange: dateAsStr => dispatch(dayChange(dateAsStr))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(DaysContainer)
