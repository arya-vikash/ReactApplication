import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './Components/MainComponent';
import { DISHES } from './shared/dishes';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }
  render(){
    return(
      <div className='App'>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
