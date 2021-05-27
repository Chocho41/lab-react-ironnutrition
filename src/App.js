import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';

export class App extends React.Component {
  state = {
    foods: foods,
    isClick: false,
    name: '',
    numberOfCalories: '',
    image: '',
    searchValue: "",
    totalCal:0
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(event.target);
    event.preventDefault();
    console.log('I have been clicked!');
    console.log(this.state);
    console.log(this.state.foods);
    const newFood=  {
      name: this.state.name,
      calories: this.state.numberOfCalories,
      image: this.state.image,
      quantity: 1,
    }

    this.setState({
      // without using newFood:
      // foods: [
      //   ...this.state.foods,
      //   {
      //     name: this.state.name,
      //     calories: this.state.numberOfCalories,
      //     image: this.state.image,
      //     quantity: 1,
      //   },
      // ], 
      // =>>>> plus by trying to edit newFood:{} an error was thrown as you where modifying a state and using it in the same expression (useState)
        newFood: newFood,     
        
        foods: [
        ...this.state.foods, newFood
      ],
      isClick: false,
    });
    console.log(foods);
  };

  handleClickForm = (event) => {
    this.setState({ isClick: true });
    console.log(this.state);
    console.log(this.state.foods);
    console.log(event.target);
    console.log(event.target.value);
  };

  handleSearchValue = (searchValue) => {
    this.setState({
      searchValue: searchValue,
    });
    console.log(this.state.searchValue)
  };

  render() {
    const filteredDishes = this.state.foods.filter((food) => {

      return food.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });
    return (
      <div className="App">
<div> <Search
          value={this.state.searchValue}
          callbackSearchFn={this.handleSearchValue}
        />

        {filteredDishes.map((food) => {
          return <FoodBox callBackFn={this.handleClickForm} food={food} />;
        })}
        {this.state.isClick && (
          <Form
            callbackSubFn={this.handleSubmit}
            callbackOnChgFn={this.handleChange}
          />
        )}</div> 
        <div>

        </div>
       
        
      </div>
    );
  }
}

export default App;
