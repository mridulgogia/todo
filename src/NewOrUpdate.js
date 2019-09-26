import React, { Component } from 'react';
import NewTodo from './NewTodo';

export default class NewOrUpdate extends Component {
  
    render() {
        return (
            <div>
                {
                    this.props.activeAction === null ? 
                    <button 
                        className ="btn btn-dark mb-5 mt-1"
                        onClick = {this.props.changeStateToAdd}
                    >
                    Add Todo</button> 
                    : null
                }
                {
                    this.props.activeAction === 'addNew' ? <NewTodo 
                        className=" mt-2"
                        Text = {this.props.Text}
                        saveText = {this.props.onAdd}
                        changeStateToNull= {this.props.changeStateToNull}
                        /> : null 
                }
                {
                    this.props.activeAction === 'update' ? <NewTodo 
                    className = "mt-2"
                    Text = {this.props.Text}
                    addingText = {this.updateText} 
                    changeStateToNull = {this.props.changeStateToNull}
                    saveText = { this.props.saveUpdatedText}
                    /> : null
                }
                
            </div>
        )
    }
}
