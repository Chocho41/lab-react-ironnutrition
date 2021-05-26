import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import Form from './components/Form'


export class App extends React.Component {
    state = {
        foods: foods,
        isClick : false,
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
  
  handleClickForm = () => {
    this.setState({isClick : true});
  }
  
  render() {
    return (
      <div className="App">
          {this.state.foods.map((food) =><FoodBox callBackFn={this.handleClickForm} food={food}/>)}
        {this.state.isClick && <Form callbackSubFn={this.handleSubmit} callbackOnChgFn={this.handleChange}/>}
      </div>
    )
  }
}

export default App;


