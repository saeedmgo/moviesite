import { combineReducers } from "redux";
import detailReducer from "./detail/detail-reducer";

export default combineReducers({ detail: detailReducer });
