import React from "react";
import Greetings from './Greeting.js'; 

class SimpleForm extends React.Component {
    state = {
      firstName: "",
    };
  
    onFirstNameChange = event =>
      this.setState({
        firstName: event.target.value
      });
  
    render() {
      return (
        <div>
          <input type="text" name="firstName" onChange={this.onFirstNameChange} />
        
          <Greetings firstName={this.state.firstName} />
        </div>
      );
    }
  }

  export default SimpleForm;