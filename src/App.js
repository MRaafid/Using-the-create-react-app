import React, {Component} from 'react';
class MyApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        reversedText: ''
      };
    }
  
    handleInputChange = (event) => {
      const userInput = event.target.value;
      const reversedText = userInput.split('').reverse().join(''); // Reverse the input text
      this.setState({ userInput, reversedText });
    };
  
    render() {
      return (
        <div id="app">
          <h1>Reverse Text</h1>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleInputChange}
            placeholder="Type something..."
          />
          <p>Reversed Text: {this.state.reversedText}</p>
        </div>
      );
    }
  }
  
  export default MyApp;