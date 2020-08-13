import React, { Component } from 'react';
import './SignupPage.css';

class SignupPage extends Component {
  constructor() {
    super();
    this.state = {
      name: 'John Doe',
      email: 'john@doe.com',
      nacionality: 'This is the default message...',
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const property = event.target.name;
    this.setState({
      [property]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { name, email, nacionality } = this.state;
    console.log(name, email, nacionality);
  };

  handleInfoDisplay = (event) => {
    const submition = event.
  };

  render() {
    return (
      <form className="SignupPage" onSubmit={this.handleFormSubmission}>
        <label htmlFor="name-input">First and Last Name</label>
        <input
          id="name-input"
          type="text"
          name="name"
          placeholder="First and Last Name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label htmlFor="content-input">Nacionality</label>
        <select
          name="nacionality"
          id="nacionality-input"
          value={this.state.nacionality}
          onChange={this.handleInputChange}
        >
          <option value="en">British</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>

        <button onSubmit={this.handleInfoDisplay}>Submit</button>
        <div>
          <p>Your name is: {this.state.name}</p>
          <p>Your e-mail address is: {this.state.email}</p>
        </div>
      </form>
    );
  }
}

export default SignupPage;
