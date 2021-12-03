import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
    answerSubmit
} from "../action/index"
class Question extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showCorrectstatus:false
        }
    }


    
  render() {
    return (
      <div style={{ display: this.props.visibility ===true?"block":"none"}}>
        <div className="quize-header">
          Q{this.props.question_no}.{this.props.question_text} ?
        </div>
        <div className="quize-option">
          <ul>
            {Object.keys(this.props.question_option).map((option_no) => (
                <li key={`option-key-${this.props.question_no}${option_no}`}>
                  <input
                    type="radio"
                    name={`option-id-${this.props.question_no}`}
                    id={`option-id-${option_no}`}
                    className="check-ans"
                    onClick={() => {
                      this.props.answerSubmit(
                        this.props.question_no,
                        option_no
                      );
                      this.setState({ showCorrectstatus: true });
                    }}
                  />
                  <label htmlFor={`option-id-${option_no}`}>
                    {this.props.question_option[option_no]}
                  </label>
                </li>
            ))}
          </ul>
          {this.state.showCorrectstatus === true ? (
            <div className="quize-correct">
              <p>
                Correct:
                {this.props.question_option[this.props.question_correct]}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (props) => {
  return {
      answer:props.answer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    answerSubmit: (question_no,option_no) => dispatch(answerSubmit(question_no,option_no)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
