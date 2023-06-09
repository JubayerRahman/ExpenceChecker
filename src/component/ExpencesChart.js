import React from "react";

import Chart from "./Chart/Chart";

const ExpncesChart = props =>{
    const chartDataPoint =[
        {lable:'Jan',  value: 0 },
        {lable:'Feb',  value: 0 },
        {lable:'Mar',  value: 0 },
        {lable:'Apr',  value: 0 },
        {lable:'May',  value: 0 },
        {lable:'June', value: 0 },
        {lable:'July', value: 0 },
        {lable:'Aug',  value: 0 },
        {lable:'Sep',  value: 0 },
        {lable:'Oct',  value: 0 },
        {lable:'Nov',  value: 0 },
        {lable:'Dec',  value: 0 },
    ]

    for(const expencs of props.expences){
        const expenceMonth = expencs.date.getMonth();
        chartDataPoint[expenceMonth].value += expencs.amount; 
    }
    return(
        <Chart dataPoints={chartDataPoint}/>
    )
}

export default ExpncesChart;