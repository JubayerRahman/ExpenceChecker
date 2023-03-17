import React , {useState}  from "react";
import './NewExpences.css';
import ExpenceForm from "./ExpenceForm";

function NewExpences(props){

    const [isEditing, setIsEditing]= useState(false);

    const saveExpenceHandeler =(enterExpenceData)=>{
       const expenceDatas ={
        ...enterExpenceData
       }
       props.addNewExpence(expenceDatas);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
      };
    
      const stopEditingHandler = () => {
        setIsEditing(false);
      };

    return(
        <div className="newExpence">
            {!isEditing && 
            <button className="buttonStyle" onClick={startEditingHandler}>Add new expence </button>
            }
            {isEditing && 
            <ExpenceForm onSaveExpence={saveExpenceHandeler} onCancel={stopEditingHandler}/>
            }
        </div>
    )
}

export default NewExpences;