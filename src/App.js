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
    newFood: {}, // pk this.setState({newFood: {name: this.state.name,calories: this.state.numberOfCalories,image: this.state.image,quantity: 1}}) est resté vide
    searchValue: "",
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
    this.setState({
      foods: [
        ...this.state.foods,
        {
          name: this.state.name,
          calories: this.state.numberOfCalories,
          image: this.state.image,
          quantity: 1,
        },
      ],
      isClick: false,
    });
    console.log(foods);
  };

  handleClickForm = () => {
    this.setState({ isClick: true });
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

        <Search
          value={this.state.searchValue}
          callbackSearchFn={this.handleSearchValue}
        />

        {this.state.foods.map((food) => {
          return <FoodBox callBackFn={this.handleClickForm} food={filteredDishes} />;
        })}
        {this.state.isClick && (
          <Form
            callbackSubFn={this.handleSubmit}
            callbackOnChgFn={this.handleChange}
          />
        )}
      </div>
    );
  }
}

export default App;
