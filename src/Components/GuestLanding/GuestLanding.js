import React from "react";
import "./GuestLanding.css";
// bring in connect
import { connect } from "react-redux";
// bring in reducers
import { loginUser, registerUser } from "../../redux/reducers/userReducer";

class GuestLanding extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      username: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // handle both buttons in both functions
    const formName = e.target.name;
    const { firstName, username, password } = this.state;
    const { loginUser, registerUser } = this.props;
    console.log(formName);

    if (formName === "login") {
      // sending back an object
      loginUser({
        username,
        password
      });
    } else if (formName === "register") {
      registerUser({
        firstName,
        username,
        password
      });
    }
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div id="GuestLanding" className="views">
        <h1>Welcome</h1>
        <h2>Please Login or Register</h2>
        <form name="login" onSubmit={this.handleSubmit}>
          <h2>Existing Users</h2>
          <label>Username: </label>
          <input name="username" onChange={this.handleInput} />
          <label>Password: </label>
          <input name="password" onChange={this.handleInput} />
          <button type="submit">Login</button>
        </form>
        <form name="register" onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <label>Firstname: </label>
          <input name="firstName" onChange={this.handleInput} />
          <label>Username: </label>
          <input name="username" onChange={this.handleInput} />
          <label>Password: </label>
          <input name="password" onChange={this.handleInput} />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

// if no need to map props, use null as first argument
export default connect(
  null,
  {
    loginUser,
    registerUser
  }
)(GuestLanding);
