import React, { Component } from 'react'
export default class NewTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.Text
        }
        
        this.adding = this.adding.bind(this);
        this.save = this.save.bind(this);
    }

    //Function handles the input text event action
    adding(event) {
        const { value } = event.target;
        this.setState({ text: value});
    }

    //this Function is middleware for saving the todo and removing the input component from the dom  
    save() {
        this.props.saveText({
            text: this.state.text,
            date: new Date().toLocaleTimeString(),
            completed: false
        });
        this.props.changeStateToNull();
    }


    render() {
        return (
            <>
                <div className="input-group mb-3 mt-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Todo</span>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        value= {this.state.text}
                        placeholder="Text goes here........." 
                        aria-label="Username" 
                        aria-describedby="basic-addon1"
                        onChange = {this.adding} 
                        />
            </div>
            <button 
                onClick={this.save}
                className="btn btn-dark mr-3 mb-3"
                >Save
            </button>
            <button 
                onClick={this.props.changeStateToNull} 
                className= "btn btn-light mb-3"
            > Cancel
            </button>
           </>
        );
    }
}
