import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      total_question: Object.keys(this.props.questions).length,
      total_right_answer: 0,
      total_worng_answer: 0,
      wish: "",
      result_rate:0
    };
  }

  
  componentDidMount = () => {
    let total_right_answer = 0;
    let total_worng_answer = 0;
    let result_list = [];
    let wish = "";
    for (let question_no of Object.keys(this.props.questions)) {
      if (!(question_no in this.props.answer)) {
        result_list.push({
          question_no: question_no,
          mark: 0,
          status: "not_answered",
        });
        total_worng_answer++;
        continue;
      }
      let ans_by_system = Number(this.props.questions[question_no].correct);
      let ans_by_user = Number(this.props.answer[question_no]["option_no"]);
      if (ans_by_system === ans_by_user && question_no in this.props.answer) {
        result_list.push({
          question_no: question_no,
          mark: 1,
          question_ans:
            this.props.questions[Number(question_no)].option[
              Number(ans_by_user)
            ],
          status: "right_answer",
        });
        total_right_answer++;
        continue;
      }
      if (ans_by_system !== ans_by_user && question_no in this.props.answer) {
        result_list.push({
          question_no: question_no,
          mark: 1,
          question_ans:
            this.props.questions[Number(question_no)].option[
              Number(ans_by_user)
            ],
          status: "wrong_answer",
        });
        total_worng_answer++;
      }
    }

    //wish message
    let result_rate = (total_right_answer / this.state.total_question) * 100;
    if (result_rate < 51) {
      wish += `Very Bad`;
    }
    if (result_rate > 51 && result_rate < 79) {
      wish += `Try hadrer`;
    }
    if (result_rate > 79 && result_rate < 101) {
      wish += `Very good`;
    }

    this.setState({
      result: result_list,
      total_right_answer: total_right_answer,
      total_worng_answer: total_worng_answer,
      wish:wish,
      result_rate:result_rate
    });
  };

  render() {
    return (
      <section id="div-separate">
        <div className="quize-result-over">
          <div className="quize-result-header">
            <h1>
              Your Result is:
              {this.state.result_rate.toFixed(2)}%
            </h1>
          </div>
          <div className="quize-result-info">
            <h1>Total number of Questions : {this.state.total_question}</h1>
            <h1>
              Total number of Wrong Answer : {this.state.total_worng_answer}
            </h1>
            <h1>
              Total number of Correct Answer : {this.state.total_right_answer}
            </h1>
          </div>
          <div className="quize-result-wish">
            <h2>{this.state.wish}</h2>
          </div>
        </div>
        <div className="quize-start" style={{ width: "88%" }}>
          <div className="quize-header">QUIZ ANALYSIS</div>
          <div className="quize-result-table">
            <table>
              <thead>
                <tr>
                  <th>Ques no</th>
                  <th>User Answer</th>
                  <th>Marks Alloted</th>
                </tr>
              </thead>
              <tbody>
                {this.state.result.map((obj) => (
                  <tr
                    key={`result-key-${obj.question_no}`}
                    className={
                      obj.status === "right_answer"
                        ? "quize-result-right"
                        : "quize-result-wrong"
                    }
                  >
                    <td>{obj.question_no}</td>
                    <td>
                      {obj.status === "not_answered"
                        ? "Not answered"
                        : obj.question_ans}
                    </td>
                    <td>{obj.status === "right_answer" ? 1 : 0} Mark</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        `
      </section>
    );
  }
}

const mapStateToProps = (props) => {
  return {
    answer: props.answer,
  };
};

export default connect(mapStateToProps)(Result);
