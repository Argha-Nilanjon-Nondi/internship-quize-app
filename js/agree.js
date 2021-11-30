function quize_start_func() {
    div_separate.innerHTML = `
    <div class="quize-start">

    <div class="quize-question">
    </div>

    <div class="quize-footer">
        <div class="quize-disagree">
            <button id="quize-slide-pre">Previous</button>
            <button id="quize-slide-next">Next</button>
        </div>
    </div>
</div>`;


    let js_quize = document.createElement("script");
    js_quize.src = "js/quize.js";
    document.body.appendChild(js_quize);
}
let quize_start0001 = document.querySelector(".quize-footer button");
let quize_agree = document.querySelector(".quize-footer input[type='checkbox']");
let quize_disagree = document.querySelector(".quize-disagree");

quize_start0001.addEventListener("click", function() {
    if (quize_agree.checked == true) {


        quize_start_func();


    } else {
        quize_disagree.style.padding = "1rem"
        quize_disagree.style.backgroundColor = "#ef9595"
    }
});