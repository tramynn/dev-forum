import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { getSession } from "../../redux/reducers/userReducer";

class Header extends React.Component {
  componentDidMount() {
    // invoke methods!
    this.props.getSession();
  }

  render() {
    const { firstName } = this.props;
    const alias = firstName ? firstName : "Guest";

    return (
      <div>
        <div id="Header">
          <h1>Dev Forum</h1>
          <h4>Hello, {alias}</h4>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    firstName: reduxState.userReducer.firstName
  };
};

export default connect(
  mapStateToProps,
  {
    getSession
  }
)(Header);
