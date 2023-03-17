import React from "react";
import './ExpenceFilter.css'

function  ExpenceFilter(props){

    const expenceFielter =(event)=>{
        props.onAction(event.target.value);
    }

    return(
        <div className="expenceFiltrMainSection">
            <h2 className="filterTitle">Filtered by Year</h2>
            <div className="fielteSection">
                <select value={props.selected} onChange={expenceFielter}>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
            
    )
}

export default ExpenceFilter;

