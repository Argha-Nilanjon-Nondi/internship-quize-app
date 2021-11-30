let questions = {
    "1": {

        question: "What is the capital of Bangladesh",

        option: {
            1: "Dhaka",
            2: "Khulna",
            3: "Rajshahi"
        },

        correct: 1
    },

    "2": {

        question: "When Bangladesh become independent",

        option: {
            1: "1969",
            2: "1970",
            3: "1971"
        },

        correct: 3
    },

    "3": {

        question: "Which is the densely populated country",

        option: {
            1: "Japan",
            2: "Bangladesh",
            3: "USA"
        },

        correct: 2
    }
}

function varify_answer() {
    let total_question = Object.keys(questions).length;
    let total_right_answer = 0;
    let total_worng_answer = 0;
    let assesment = {};
    let answers = {}; //check correct answers
    let user_ans = {}; //user answer
    let question_ans = document.querySelectorAll(".quize-option");
    for (let r = 0; r < question_ans.length; r++) {
        let q_no = question_ans[r].getAttribute("ques");
        assesment[q_no] = {};
        user_ans[q_no] = 0;
    }
    let question_option = document.querySelectorAll("input[type='radio']");
    for (let m = 0; m < question_option.length; m++) {
        let question_no = question_option[m].getAttribute("ques");
        let choice_ans = question_option[m].checked;
        let choice_no = question_option[m].getAttribute("value");

        assesment[question_no][choice_no] = choice_ans;
        if (choice_ans == true) {
            user_ans[question_no] = questions[question_no].option[choice_no];
        }
    }

    for (ans_no in questions) {
        answers[ans_no] = (assesment[ans_no][questions[ans_no].correct] == true)
    }

    //retrieving total right and worng answers

    for (user_ans_no in answers) {
        if (answers[user_ans_no] == true) {
            total_right_answer++;
        }
        if (answers[user_ans_no] == false) {
            total_worng_answer++;
        }
    }

    //wish message
    let result_per = (total_right_answer / total_question) * 100;
    let wish = ``;
    if (result_per < 51) {
        wish += `Very Bad`
    }
    if (result_per > 51 && result_per < 79) {
        wish += `Try hadrer`
    }
    if (result_per > 79 && result_per < 101) {
        wish += `Very good`
    }


    //making result page
    let result_html = `  <div class="quize-result-over">
    <div class="quize-result-header">
        <h1>Your Result is: ${result_per.toFixed(2)}%</h1>
    </div>
    <div class="quize-result-info">
        <h1>Total number of Questions : ${total_question}</h1>
        <h1>Total number of Wrong Answer : ${total_worng_answer}</h1>
        <h1>Total number of Correct Answer : ${total_right_answer}</h1>
    </div>
    <div class="quize-result-wish">
        <h2>${wish}</h2>
    </div>
</div>
<div class="quize-start" style="width: 88%;">
<div class="quize-header">QUIZ ANALYSIS</div>
<div class="quize-result-table">
    <table>
        <tr>
            <th>
                Ques no
            </th>
            <th>
                User Answer
            </th>
            <th>
                Marks Alloted
            </th>
        </tr>`;

    for (let singleq in answers) {
        let user_q_no = singleq;
        let user_q_ans = user_ans[singleq];
        if (user_q_ans == "0") {
            user_q_ans = "Not answered";
        }
        if (answers[singleq] == true) {
            result_html += `
            <tr class="quize-result-right">
            <td>${user_q_no}</td>
            <td>${user_q_ans}</td>
            <td>1 Mark</td>
        </tr>`
        }
        if (answers[singleq] == false) {
            result_html += `
        <tr class="quize-result-wrong">
        <td>${user_q_no}</td>
        <td>${user_q_ans}</td>
        <td>0 Mark</td>
        </tr>`
        }

    }

    result_html += `            </table>
        </div>
    </div>`;

    div_separate.innerHTML = result_html;

}

function create_questions() {

    let quize_question_hold = document.querySelector(".quize-question");
    let html_code = ``;
    var uid = 0;
    for (ques in questions) {
        let question_text = questions[ques].question;
        html_code += ` <div class="quize-header" ques=${uid}>Q${ques}.${question_text} ?</div>
    <div class="quize-option" ques="${ques}">
        <ul>`

        for (opt in questions[ques].option) {

            html_code += ` <li>
                <input type="radio" name=${ques} ques="${ques}" id="q${ques}" value="${opt}" class="check-ans" onclick="show_correct(${uid})">
                <label for="q${opt}">${questions[ques].option[opt]}</label>
            </li>`

        }


        html_code += `
        </ul>
        <div class="quize-correct">
            <p>Correct:${questions[ques].option[questions[ques].correct]}</p>
        </div>
    </div>`;
        uid++;
    }
    quize_question_hold.innerHTML += html_code;
}

create_questions();

// function make_question_unshow(except) {
//     let questions_all = document.querySelectorAll(".quize-header");
//     let questions_option = document.querySelectorAll(".quize-option");

//     for (let i = 0; i < questions_option.length; i++) {
//         if (except == i) {
//             questions_all[i].style.display = "block";
//             questions_option[i].style.display = "block";
//         }
//         if (except != i) {
//             questions_all[i].style.display = "none";
//             questions_option[i].style.display = "none";
//         }
//     }
// }

function make_question_unshow(except) {
  let questions_all = document.querySelectorAll(".quize-header");
  let questions_option = document.querySelectorAll(".quize-option");

      questions_all[except].style.display = "block";
      questions_option[except].style.display = "block";

      let previous_question=except-1;
    
    if (previous_question>0) {
      questions_all[previous_question].style.display = "none";
      questions_option[previous_question].style.display = "none";
    }
  
}

function show_correct(exc) {
    let questions_correct = document.querySelectorAll(".quize-correct");
    questions_correct[exc].style.display = "block";

    for (let k = 0; k < questions_correct.length; k++) {
        if (k == exc) {
            questions_correct[exc].style.display = "block";
        }

        if (k != exc) {
            questions_correct[k].style.display = "none";
        }
    }
}



let question_position = 0;



make_question_unshow(except = 0);
let quize_slide_pre = document.getElementById("quize-slide-pre");
let quize_slide_next = document.getElementById("quize-slide-next");
quize_slide_pre.addEventListener("click", function() {
    if (question_position == 0) {
        quize_slide_pre.style.display = "none";
        quize_slide_next.style.display = "block";
        quize_slide_next.innerText = "Next";
        make_question_unshow(question_position);

    } else {
        quize_slide_next.style.display = "block";
        quize_slide_next.innerText = "Next";
        question_position -= 1;
        make_question_unshow(question_position);

    }
});
quize_slide_next.addEventListener("click", function() {
    let last_ques_index = document.querySelectorAll(".quize-header")[(Object.keys(questions).length) - 1];

    if (quize_slide_next.innerText == "Finish") {

        varify_answer();



    }

    if (last_ques_index.style.display != "block") {
        question_position += 1;

        quize_slide_pre.style.display = "block";
        quize_slide_next.innerText = "Next";
        make_question_unshow(question_position);


        if (last_ques_index.style.display == "block") {
            quize_slide_pre.style.display = "block";
            quize_slide_next.innerText = "Finish";
        }
    }
});
if (question_position == 0) {
    quize_slide_pre.style.display = "none";
}