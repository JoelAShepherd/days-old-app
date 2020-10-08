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
    
    
    

    async componentDidMount(){
        this.setState({date: this.props.aDate});
        const url1 = "https://numbersapi.p.rapidapi.com/"
        const url2 = "/date?fragment=true&json=true";
        
        //this.setState({day:dateAsArr[2], month: dateAsArr[1]})
        const url =  "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true";
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "numbersapi.p.rapidapi.com",
                "x-rapidapi-key": "a8f33b31c6msh992ac8d5a190cb9p17bc8ejsn9c557559d091"
        }});
        const data = await response.json();
        this.setState({event: data.text})
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
        aDate: state.aDate
    }
}





export default connect(mapStateToProps, null)(EventsContainer)

