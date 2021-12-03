import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import {
  loginStatus,
  agreeStatus,
} from "../action/index";
import Alert from "./Alert"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "argha",
      password: "argha123",
      errorStatus:false
    };
  }

  getValues = (event) => {
    this.setState({
      errorStatus:false,
      [event.target.name]: event.target.value,
    });
  };

  submit=()=>{
    if((this.state.username===this.props.username) && (this.state.password===this.props.password)){
      this.props.loginStatus(false)
      this.props.agreeStatus(true)
    }
    else{
      this.setState({
        errorStatus:true
      })
    }
  }

  render() {
    return (
      <Fragment>
        {
          this.state.errorStatus===true?(<Alert text="Username or password is incorrect"></Alert>):(<></>)
        }
        <section id="div-separate">
          <div className="login-container">
            <div className="login-header">Login To Your Quiz</div>
            <div className="login-wrap">
              <div className="login-group">
                <i className="fa fa-user"></i>
                <input
                  type="text"
                  id="user"
                  name="username"
                  onChange={this.getValues}
                  value={this.state.username}
                  placeholder="User"
                />
              </div>
              <div className="login-group">
                <i className="fa fa-key"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={this.getValues}
                  value={this.state.password}
                  placeholder="Password"
                />
              </div>
              <div className="login-group">
                <button id="quize-submit" onClick={this.submit}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps=(props)=>{
  return {

  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    loginStatus: (status) => dispatch(loginStatus(status)),
    agreeStatus: (status) => dispatch(agreeStatus(status))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)