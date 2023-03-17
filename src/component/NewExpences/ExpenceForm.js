import React, { useState } from "react";
import './ExpenceForm.css'

function ExpenceForm(props){

    const [enterTitle, setNewTitle] =    useState('')
    const [enterAmount, setNewAmount] =  useState('')
    const [enterDate, setNewDate] =      useState('')

    const titleChange= (event)=>{
        setNewTitle(event.target.value)
    }

    const amountChange = (event)=>{
        setNewAmount(event.target.value)
    }
    const dateChange = (event)=>{
        setNewDate(event.target.value)
    }

    const submitHandler =(event)=>{
        event.preventDefault();

        const expenceData ={
            title  :   enterTitle,
            amount :  enterAmount,
            date   :    new Date(enterDate)
        }
        props.onSaveExpence(expenceData);

        setNewTitle   ("");
        setNewAmount  ("");
        setNewDate    ("");
    } 
    return(
        <div className="expenceForm">
            <h2 className="formDialog">Fill The following fields to create new expence item</h2>
            <form onSubmit={submitHandler}>
                <div className="newExpenceTitle">
                    <label  htmlFor="title">Title </label>
                    <input onChange= {titleChange} value={enterTitle} id="title" type="text" placeholder="Enter expence name" required/>
                </div>
                <div className="newExpencePrice">
                    <label htmlFor="price">Price </label>
                    <input onChange={amountChange} value={enterAmount} id="price" type="number" min='0.01' step="0.01" placeholder="Enter expence price" required/>
                </div>
                <div className="newExpenceDate">
                    <label htmlFor="date">Date </label>
                    <input onChange={dateChange} value={enterDate} id="date" type="date" min='2019-01-01' max='2023-12-31' required/>
                </div>
                <div className="newExpenceExport">
                    <button onClick={props.onCancel}>Close</button>
                    <button>Add Expences</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenceForm;