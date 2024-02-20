import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {
    render() {
        return ( 
            <div className="App">
                <Banner bannerText="Den    ist Site"/>
                <Exhibit name="Exhibit 1"></Exhibit>
                <Exhibit name="Exhibit 2"></Exhibit>
                <Exhibit name="Exhibit 3"></Exhibit>
              
                {/* <h1>Hello, World</h1> */}
                {/* <button className="square">Hello</button> */}
            </div>
          );
    }
}

export default App;
