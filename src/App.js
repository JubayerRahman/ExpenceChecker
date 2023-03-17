import React, {useState} from "react";
import Expences from "./component/Expences";
import NewExpences from "./component/NewExpences/NewExpences";
import MyName from "./component/MyName/MyName";
import './App.css'

const dummy_list =[
  // {id:0, title:'PC Cover',        amount:10,      date: new Date(2023,2,10) },
  // {id:1, title:'Mobile Phone',    amount:10000,   date: new Date(2022,6,10) },
  // {id:2, title:'college Books',   amount:2000,    date: new Date(2021,4,10) },
  // {id:3, title:'shoes',           amount:800,     date: new Date(2020,10,10) },
  // {id:4, title:'Shit oree',       amount:50,      date: new Date(2022,6,29) },
]

function App() {

  const [expences, expenceList] = useState (dummy_list)
  const saveNewExpence = expence =>{
    
    expenceList(previousExpence=>{
      return [expence, ...previousExpence]
    })

    console.log(expence)
  }
  return (
    <div className="mainSection">
      <NewExpences addNewExpence ={saveNewExpence}/>
      <Expences items={expences}/>

      <MyName/>

    </div>
  );
}

export default App;
