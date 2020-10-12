import React from 'react'
import {connect} from 'react-redux'



class EventsContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            event: '',
            date: '',
            day: '',
            month: ''
        }
        
    }
    
    
    

    

    render(){
        return(
            <div>
                <h2>This is the events container!</h2>
                <p>This is the date: {this.props.aDate}</p>
                <p>{this.state.event}</p>
                <p>check: dateAsArr{this.dateAsArr}:</p>
                <p>date: {this.state.date}</p>
                <p>day: {this.state.day}</p>
                <p>month: {this.state.month}</p>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        aDate: state.days.aDate
    }
}





export default connect(mapStateToProps, null)(EventsContainer)

