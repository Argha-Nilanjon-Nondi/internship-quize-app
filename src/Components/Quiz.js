import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { quizeStatus, resultStatus } from "../action/index";
import Question from "./Question";
class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question_position: 0,
      question_count: Object.keys(this.props.questions).length,
      question_visibility:{},
      question_ready:false
    };
  }

  set_question=()=>{
     let visibility_obj = {};
     let question_no_list = Object.keys(this.props.questions);
     question_no_list.map((question_no) => {
       visibility_obj[question_no] = { visibility_status: false };
       return true;
     });
     visibility_obj[question_no_list[0]] = { visibility_status: true };
     this.setState({
       question_visibility: visibility_obj,
     });
  }

  componentDidMount = () => {
    this.set_question()
    this.setState({question_ready:true})
  };

  previous = (current_position) => {
     let visibility_obj = this.state.question_visibility;
     let question_no_list = Object.keys(this.props.questions);
     visibility_obj[question_no_list[current_position]] = {
       visibility_status: false,
     };
     visibility_obj[question_no_list[current_position - 1]] = {
       visibility_status: true,
     };
     this.setState({question_visibility:visibility_obj,question_position:current_position-1})
  };

  next = (current_position) => {
    let question_no_list = Object.keys(this.props.questions);
     if (question_no_list.length - 1 === current_position) {
       this.props.quizeStatus(false)
       this.props.resultStatus(true)
     }
    let visibility_obj=this.state.question_visibility;
    visibility_obj[question_no_list[current_position]]={visibility_status:false}
    visibility_obj[question_no_list[current_position+1]] = {
      visibility_status: true,
    };
    this.setState({question_visibility:visibility_obj,question_position:current_position+1})
   
  };

  render() {
   
    return (
      <section id="div-separate">
        <div className="quize-start">
          {this.state.question_ready === true ? (
            <div className="quize-question">
              {Object.keys(this.props.questions).map((question_no) => (
                  <Question
                    key={`question-key-${question_no.toString()}`}
                    visibility={
                      this.state.question_visibility[question_no]
                        .visibility_status
                    }
                    question_no={question_no}
                    question_text={this.props.questions[question_no].question}
                    question_option={this.props.questions[question_no].option}
                    question_correct={this.props.questions[question_no].correct}
                  ></Question>
              ))}
            </div>
          ) : (
            <></>
          )}

          <div className="quize-footer">
            <div className="quize-disagree">
              {this.state.question_position === 0 ? (
                <></>
              ) : (
                <button
                  onClick={() => this.previous(this.state.question_position)}
                >
                  Previous
                </button>
              )}

              <button onClick={() => this.next(this.state.question_position)}>
                {" "}
                {this.state.question_position ===
                Object.keys(this.state.question_visibility).length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
        `
      </section>
    );
  }
}

const mapStateToProps = (props) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    quizeStatus: (status) => dispatch(quizeStatus(status)),
    resultStatus: (status) => dispatch(resultStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
