import { combineReducers } from "redux";

const loginstatus = (state = true, action) => {
  if (action.type === "loginstatus") {
    return action.payload;
  }
  return state;
};

const agreestatus = (state = false, action) => {
  if (action.type === "agreestatus") {
    return action.payload;
  }
  return state;
};

const quizestatus = (state = false, action) => {
  if (action.type === "quizestatus") {
    return action.payload;
  }
  return state;
};

const resultstatus = (state = false, action) => {
  if (action.type === "resultstatus") {
    return action.payload;
  }
  return state;
};

const answer=(state={},action)=>{
  if(action.type==="answer"){
    let answer_list={}
    answer_list[action.payload.question_no]={"option_no":action.payload.option_no}
    return {...state,...answer_list}
  }
  return state
}

const rootReducers = combineReducers({
  loginstatus,
  agreestatus,
  quizestatus,
  resultstatus,
  answer
});

export default rootReducers;
