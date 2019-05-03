import React, { Component } from 'react';
//import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';



class App extends Component {

  onClickImage = () => {
    alert('I am functional');
  }


  render() {
    return (
      <div id="app-container"> 
        <div>
          <div>
            <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Karma" rel="stylesheet"/>
          </div> 
          <div>
            <h1 className="Bd">The Dream Is Still Alive</h1> 
          </div>
        </div>
        <div id="main-container">
          <div className="sub-container">
            <div >
              <h2 className="identifier">_MALE_</h2>
              <div id="minContainer">
                <img  src="https://vignette.wikia.nocookie.net/gotascent/images/4/4e/Promotional_Art_-_Warrior_King.jpg/revision/latest?cb=20130517061037" 
                  height="350" 
                  width="250" 
                  alt=" "
                  onClick={this.onClickImage} 
                />
              </div>
              <h3 className="indicator" > CLICK IMAGE</h3> 
            </div> 
          </div>
          <div className="sub-container">
            <div > 
              <h2 className="identifier">FEMALE</h2>      
              <div id="minContainer"> 
                <img src="https://i.pinimg.com/originals/eb/4b/56/eb4b56205c9ed5cd384cde2b1962c34b.jpg" 
                  height="350" 
                  width="250" 
                  alt=" " 
                  onClick={this.onClickImage} 
                />
              </div>
              <h3 className="indicator" > CLICK IMAGE</h3>
            </div>
          </div>
        </div>
          {/*<Warrior />*/}
      </div>
    );
  }
}

export default App;
