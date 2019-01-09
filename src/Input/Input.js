import React, {Component} from "react";

class Input extends Component{
    state = {
        name: "",
        surname: ""
    };

    handleChange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addUserInput(this.state);
        this.setState({
            name: "",
            surname: ""
         });
    };

    render(){
        const {name, surname} = this.state;
        const isEnabled = name !== "" && surname !== "";
        return(
            <div>
                <h1>Submit name</h1>
                <form >
                    <input type="text" placeholder="Name" id="name" onChange={this.handleChange} value={this.state.name}/> 
                    <br></br>
                    <input type="text" placeholder="Surname" id="surname" onChange={this.handleChange} value={this.state.surname}/>
                    <button disabled={!isEnabled} onClick={this.handleSubmit}>Submit</button>  
                </form>
            </div>
        );
    }
};

export default Input;