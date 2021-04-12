/*after login start*/
let div_separate = document.getElementById("div-separate");

function quize_agree_func() {
    div_separate.innerHTML = `
    <div class="quize-start">
    <div class="quize-header">Rules and regulations of the quize</div>
    <div class="quize-content">
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
                <p> Final score will be shown after the submission of the quiz.</p>
            </li>
            <li>
                <p> Do not move out of the quiz window else your quiz will be auto submitted.</p>
            </li>
        </ol>
    </div>
    <div class="quize-footer">
        <div class="quize-disagree">
            <input type="checkbox" id="0909" name="" value="0">
            <label for="0909"> Agree</label><br>
            <button>Start Quize</button>
        </div>
    </div></div>`;

    let js_agree = document.createElement("script");
    js_agree.src = "/js/agree.js";
    document.body.appendChild(js_agree);

}



/*after login end*/

/*login start*/
let user = "argha";
let password = "argha123";

let quize_submit = document.getElementById("quize-submit");
quize_submit.addEventListener("click", function() {

    let user_element = document.getElementById("user");
    let password_element = document.getElementById("password");

    if (user_element.value == user && password_element.value == password) {

        alert("Login Successful");
        quize_agree_func();

    } else {
        quize_submit.style.backgroundColor = "#f30a40";
        alert("Login Failed");
    }

});
/*login end */