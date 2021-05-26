import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        name: "",
        numberOfCalories: "",
        image: "",
    };

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    handleSubmit = (event) => {
        console.log(event.target);
        event.preventDefault();
        console.log("I have been clicked!");
        console.log(this.state);
    }
    
    render() {
        return (
            <form className="Form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.name}
                        type="text"
                        name="name"
                        placeholder="name"
                        id="name"
                    />
                </div>
                <div>
                    <label htmlFor="numberOfCalories"></label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.calories}
                        type="number"
                        name="numberOfCalories"
                        placeholder="number of calories"
                        id="numberOfCalories"
                    />
                </div>
                <div>
                    <label htmlFor="image"></label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.image}
                        type="text"
                        name="image"
                        placeholder="image"
                        id="image"
                    />
                </div>
                <button onClick={() => this.handleSubmit}>Submit</button>
            </form>
        )
    }
}
