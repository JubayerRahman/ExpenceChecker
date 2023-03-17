import React from 'react';
import ExpenceDate from './ExpenceDate';
import './ExpenseItem.css';
function ExpenceItem(props){
    // const [title, setTitle] = useState(props.title)
    // const clickHandel=()=>{
    //     setTitle("Shit on Oree")
    // }
    return (
        <li>

        <div className='expencItem'>
            <ExpenceDate date={props.date}/>
            <div className='expencItem_Desription'>
                <h2 className='title'>{props.title}</h2>
                <div className='expencItem__Price'> ৳ {props.price}</div>
            </div>
            {/* <button onClick={clickHandel}>Change Title</button> */}
        </div>
    </li>
    );
}

export default ExpenceItem;