import React, { Component } from 'react';
import List from './List';

export default class Todo extends Component {

   //this function passes text and timestamp to the parent component
    saveText(obj) {
        this.props.onAdd(obj);
    }

    // Function is a middleware and passes params object and the key index
    saveUpdatedText(obj) {
        this.props.saveUpdatedText(obj, this.state.updateKey);
    }

    //this function updates text and date in this.state after keyup action
   
    render() {
        let  todos  = this.props.todos;
        
        //this creates todo item list 
        let displayText = todos.map(( todo, index) => {
                return <List 
                    key = {index}
                    index= {index}
                    todo = {todo}
                    onDelete = {() => this.props.onDelete(index)}
                    onUpdate = { () => this.props.updateTextAndKey(index)}
                    completeOrNot = {(key, value) => this.props.completeOrNot(key, value)}
                />
        }
            );
       
        return (
            <div>
                {displayText}
            </div>
        );
    }
}
