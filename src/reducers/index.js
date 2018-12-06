import { combineReducers } from 'redux';
import pagea from "./PageAReducer";
import pageb from "./PageBReducer";
import main from "./mainReducer";


export default combineReducers({
  pagea,
  pageb,
  main
});
