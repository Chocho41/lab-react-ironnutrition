import React, { Component } from 'react'

export default class Search extends Component {
    // state = {
    //     name: "",
    //     numberOfCalories: "",
    //     image: "",
    // };

  trackInput = (event) => {
    this.props.callbackSearchFn(event.target.value);
  }
    render() {
        return (
            <input
        name="search"
        value={this.props.value}
        onChange={this.trackInput}
        placeholder="Search a dish"
      />);
    }
}
