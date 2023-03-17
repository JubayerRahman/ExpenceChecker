import React from "react";
import './ExpencesList.css';
import ExpenceItem from "./ExpenseItem";

const ExpencesList = props => {

  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found No Expences!!</h2>
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expence) => (
        <ExpenceItem
          key={expence.title}
          title={expence.title}
          price={expence.amount}
          date={expence.date}
        />
      ))}
    </ul>
  );
}

export default ExpencesList;