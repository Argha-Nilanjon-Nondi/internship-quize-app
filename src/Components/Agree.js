import React, { Component } from "react";
import { connect } from "react-redux";
import { quizeStatus, agreeStatus } from "../action/index";

class Agree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      agreeStatus: false,
      convenceStatus: true,
    };
  }

  handleCheck = (event) => {
    this.setState({
      [event.target.name]: event.target.checked,
      convenceStatus: true,
    });
  };

  quizStart = () => {
    if (this.state.agreeStatus === true) {
      this.props.quizeStatus(true);
      this.props.agreeStatus(false);
    } else {
      this.setState({
        convenceStatus: false,
      });
    }
  };

  render() {
    return (
      <section id="div-separate">
        <div className="quize-start">
          <div className="quize-header">Rules and regulations of the quize</div>
          <div className="quize-content">
            <ol>
              <li>
                <p>Quiz will contain total 20 questions.</p>
              </li>
              <li>
                <p> One point will be awarded for each correct answer.</p>
              </li>
              <li>
                <p> No half marks will be awarded.</p>
              </li>
              <li>
                <p> Each question has 4 options.</p>
              </li>
              <li>
                <p> Do not refresh the page.</p>
              </li>
              <li>
                <p>
                  {" "}
                  Final score will be shown after the submission of the quiz.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  Do not move out of the quiz window else your quiz will be auto
                  submitted.
                </p>
              </li>
            </ol>
          </div>
          <div className="quize-footer">
            <div
              className="quize-disagree"
              style={
                this.state.convenceStatus === false
                  ? { backgroundColor: "#ef9595", padding: "1rem" }
                  : {}
              }
            >
              <input
                type="checkbox"
                id="0909"
                name="agreeStatus"
                checked={this.state.agreeStatus}
                onChange={this.handleCheck}
              />
              <label htmlFor="0909"> Agree</label>
              <br />
              <button onClick={this.quizStart}>Start Quiz</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (props) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    agreeStatus: (status) => dispatch(agreeStatus(status)),
    quizeStatus: (status) => dispatch(quizeStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Agree);
