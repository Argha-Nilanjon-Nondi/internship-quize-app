import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Agree from "./Components/Agree";
import Login from "./Components/Login";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
let questions = {
  1: {
    question: "What is the capital of Bangladesh",

    option: {
      1: "Dhaka",
      2: "Khulna",
      3: "Rajshahi",
    },

    correct: 1,
  },

  2: {
    question: "When Bangladesh become independent",

    option: {
      1: "1969",
      2: "1970",
      3: "1971",
    },

    correct: 3,
  },

  3: {
    question: "Which is the densely populated country",

    option: {
      1: "Japan",
      2: "Bangladesh",
      3: "USA",
    },

    correct: 2,
  },
};
let default_username = "argha";
let default_password = "argha123";
class App extends Component {
  render() {
    return (
      <Fragment>
        {this.props.loginstatus === true ? <Login username={default_username} password={default_password}></Login> : <></>}
        {this.props.agreestatus === true ? <Agree></Agree> : <></>}
        {this.props.quizestatus === true ? (
          <Quiz questions={questions}></Quiz>
        ) : (
          <></>
        )}
        {this.props.resultstatus === true ? (
          <Result questions={questions}></Result>
        ) : (
          <></>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    loginstatus: props.loginstatus,
    agreestatus: props.agreestatus,
    quizestatus: props.quizestatus,
    resultstatus: props.resultstatus,
  };
};

export default connect(mapStateToProps)(App);
