import React from 'react';
import './ExpenceDate.css'
function ExpenceDate(props){
    const month = props.date.toLocaleString("en-US",{month:"long"})
    const day = props.date.toLocaleString("en-US",{day:"2-digit"})
    const year = props.date.getFullYear();
    return(
        <div className='edxpencedate'>
            <h4 className='month'>{month}</h4>
            <h4 className='year'>{year}</h4>
            <h4 className='day'>{day}</h4>
        </div>
    )
}

export default ExpenceDate;