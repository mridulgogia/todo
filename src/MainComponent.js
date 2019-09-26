import React, { Component } from 'react';
import Todo from './Todo';
import NewOrUpdate from './NewOrUpdate';
import ModalComponent from './ModalComponent';
import Paging from './Paging';

export default class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal:false,
            todos:[
                {
                    text: '0', 
                    date: new Date().toLocaleTimeString(),
                    completed: true
                },
                {
                    text: '1',
                    date: new Date().toLocaleTimeString(),
                    completed: false
                }, 
                {
                    text: '2',
                    date: new Date().toLocaleTimeString(),
                    completed: false
                },
                {
                    text: '3',
                    date: new Date().toLocaleTimeString(),
                    completed: false
                }, 
                {
                    text: '4',
                    date: new Date().toLocaleTimeString(),
                    completed: false
                }, 
                {
                    text: '5',
                    date: new Date().toLocaleTimeString(),
                    completed: false
                }, 
                {
                    text: '6',
                    date: new Date().toLocaleTimeString(),
                    completed: false
                }, 
            ],
            keyToBeDeleted: null,
            pageActive:1,
            noOfItems:3,
            updateKey: null,
            Text: '',
            activeAction: null,
        }

        this.onAdd = this.onAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.deleteConfirmation = this.deleteConfirmation.bind(this);
        this.setModalShowOrHide = this.setModalShowOrHide.bind(this);
        this.saveUpdatedText = this.saveUpdatedText.bind(this);
        this.completeOrNot = this.completeOrNot.bind(this);
        this.changePageActive = this.changePageActive.bind(this);
        this.updateTextAndKey = this.updateTextAndKey.bind(this);

        this.changeStateToAdd = this.changeStateToAdd.bind(this);
        this.changeStateToNull = this.changeStateToNull.bind(this);
    }

    //Function to push new object in the array
    onAdd(newObj){
        this.setState({
            todos: [ newObj, ...this.state.todos],
            pageActive:1
        });
    }

    // Function updates the todos array when a todo is updated
     saveUpdatedText(obj) {
        const key = this.state.updateKey;
        const newTodos = this.state.todos.filter( (item, index) => index !== key);
        this.setState({
            todos:[obj, ...newTodos],
            pageActive:1,
            Text: '',
            updateKey: null
        });
   }


    //Function to hide or show delete dialog box
    setModalShowOrHide() {
            this.setState({
                showModal: !this.state.showModal
            })
    }

    //Function for  confirmation of deletion of todo from user 
    deleteConfirmation(key) {
         this.setState({
             keyToBeDeleted: key + (this.state.pageActive-1)*this.state.noOfItems
         });
        this.setModalShowOrHide();
        //
     }

     //Function that deletes object from the array 
     onDelete() {
        const key = this.state.keyToBeDeleted;
        this.setState({
            todos: this.state.todos.filter( (item, index) => key !== index),
            keyToBeDeleted: null,
            showModal: false
        });
      
    }

   
    // Function replaces the old todo list with anew todo list after updating completed state
    completeOrNot(key, value) {
        console.log("key:", key);
        console.log("value: ", value);
        key = key +  (this.state.pageActive-1)*this.state.noOfItems;
         console.log(key);
        const updatedTodo = this.state.todos.map( (todo, index) => {
            if(index === key) {
                return { 
                    text: todo.text, 
                    date: todo.date, 
                    completed: value
                }
            } else {
                return todo;
            }
        });
       this.setState({
           todos: updatedTodo
       })
    }

    updateTextAndKey(index) {
        index = index +(this.state.pageActive-1)*this.state.noOfItems;
        this.setState({
            updateKey: index,
            Text: this.state.todos[index].text,
            activeAction: 'update'
        });
    }

    // Function changes value of pageActive to the passed value
    changePageActive(index) {
        this.setState({pageActive: index});
    }

    changeStateToAdd() {
        this.setState({
            activeAction: 'addNew',
            text: ''
        });
    }
    

    changeStateToNull() {
        this.setState({ activeAction: null})
    }

    render() {

        const startPoint = this.state.noOfItems*(this.state.pageActive -1);
        const endPoint = (this.state.pageActive * this.state.noOfItems) -1 ;

        return (
            <div className="container">
                <NewOrUpdate 
                    Text = {this.state.Text}
                    onAdd = {this.onAdd}
                    saveUpdatedText = {this.saveUpdatedText}
                    changeStateToAdd = {this.changeStateToAdd}
                    changeStateToNull = { this.changeStateToNull}
                    activeAction = {this.state.activeAction}
                />


                <Todo 
                    todos = {this.state.todos.slice(startPoint, endPoint+1)}
                    onDelete = {this.deleteConfirmation}
                    updateTextAndKey = {this.updateTextAndKey}                    
                    completeOrNot = {this.completeOrNot}
                    pageActive={this.state.pageActive}
                    noOfItems= {this.state.noOfItems}
                />

                <Paging 
                    active = {this.state.pageActive}
                    lengthOfTodo = {this.state.todos.length}
                    noOfItems = {this.state.noOfItems}
                    changePageActive={this.changePageActive}
                />

                <ModalComponent 
                    showModal = {this.state.showModal}
                    setModalShowOrHide = { this.setModalShowOrHide}
                    onDelete = {this.onDelete}
                />
            </div>
        );
    }
}
