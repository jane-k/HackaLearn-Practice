import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

export default class App extends React.Component{
  async getData(){
    const res = await axios.get('http://localhost:7071/api/datetimes');
    return res.data.message;
  }

  constructor(...args){
    super(...args);
    this.state = {date:null};
  }

  componentDidMount() {
    if (!this.state.data){
      (async() => {
        try {
          this.setState({data: await this.getData()});
        }catch(e){
        }
      })();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
             HackaLearn Practice Work
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </header>
      </div>
    );
  }
    
}