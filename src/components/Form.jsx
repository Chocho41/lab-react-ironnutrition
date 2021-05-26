import React, { Component } from 'react'

export default class Form extends Component {

    handleChange = (event) => {
        this.props.callbackOnChgFn(event);
    }
    
    handleSubmit = (event) => {
        this.props.callbackSubFn(event);
    }
    
    render() {
        return (
            <form className="Form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input
                        onChange={this.handleChange}
                        value={this.props.name}
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
                        value={this.props.calories}
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
                        value={this.props.image}
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
