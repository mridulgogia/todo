import React from 'react';
import './list.css'

export default function List(props) {

   var  {text, date, completed} = props.todo;
   console.log(props.index, completed);
    return (
        <div className="alert alert-dark">
            <input 
                type= "checkbox" 
                checked= {completed}  
                onChange={(event) =>  props.completeOrNot(props.index, event.target.checked)}
            />
            <p className={completed ? "strikethrough" : null}>{text}</p>
            <span> {date} </span>
            <div className="mt-2">
                <button
                    onClick = {props.onUpdate}
                    className= "mr-1 ml-1"
                    > <i className="fas fa-edit"></i></button>
                <button onClick = { props.onDelete}> <i className="far fa-trash-alt"></i> </button>
            </div>
        </div>
    );
}
