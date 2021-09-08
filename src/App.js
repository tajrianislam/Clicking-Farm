import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {
  componentDidMount() {
   
    }
  clickFunction = () => {
    const api = 'https://bbo00bmi8i.execute-api.us-east-2.amazonaws.com/test';
    const data = { "name" : "Mike" };
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

  }
  render() {
    return (
      <div>
      <div>Medium Tutorial</div>
      <button onClick={this.clickFunction}>Click</button>
      </div>
    );
  }
}
export default App;