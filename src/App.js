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
    };
  
  handleClickForm = () => {
    this.setState({isClick : true});
  }
  
  render() {
    return (
      <div className="App">
          {this.state.foods.map((food) =><FoodBox callBackFn={this.handleClickForm} food={food}/>)}
        {this.state.isClick && <Form/>}
      </div>
    )
  }
}

export default App;


