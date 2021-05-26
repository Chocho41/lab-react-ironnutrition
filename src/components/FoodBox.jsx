import 'bulma/css/bulma.css';
// import foods from '../foods.json';

import React from 'react'

const FoodBox = (props) => {

    const handClick = () => {
        console.log("toto");
        props.callBackFn();
    }

    // console.log(props);
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={props.food.image} alt={props.food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{props.food.name}</strong> <br />
                  <small>{props.food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button onClick={handClick} className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
}

export default FoodBox
