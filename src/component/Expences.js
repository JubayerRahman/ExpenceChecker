import React, { useState } from 'react';
// import ExpenceItem from './ExpenseItem'
import ExpenceFilter from './ExpenceFilter';
import ExpencesList from './ExpencesList';
import './Expences.css'
import ExpncesChart from './ExpencesChart';
function Expences(props){

  const [selectedYear, filterYeared] = useState('2023');

  const finalSelectedYear = yearSelect=>{
    filterYeared(yearSelect)
  }

  const filterChange = props.items.filter((expence) => {

      return expence.date.getFullYear().toString() === selectedYear;
  })

    
  return (
    <div className="expences">
      <ExpenceFilter 
      selected={selectedYear} 
      onAction={finalSelectedYear}
      />
      <ExpncesChart expences={filterChange}/>
      <ExpencesList items={filterChange}/>

      
    </div>
  );
}
export default Expences;