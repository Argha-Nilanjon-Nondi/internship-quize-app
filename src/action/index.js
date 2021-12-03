
export const loginStatus=(status)=>{
    return {
        type:"loginstatus",
        payload:status
    }
}

export const agreeStatus = (status) => {
  return {
    type: "agreestatus",
    payload: status,
  };
};

export const quizeStatus=(status)=>{
    return {
        type:"quizestatus",
        payload:status
    }
}

export const resultStatus=(status)=>{
    return {
        type:"resultstatus",
        payload:status
    }
}

export const answerSubmit=(question_no,option_no)=>{
    return {
        type:"answer",
        payload:{question_no:question_no,option_no:option_no}
    }
}
