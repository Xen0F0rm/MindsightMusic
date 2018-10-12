import { drillRef } from "../../config/firebase";
import { FETCH_DRILL } from "../types";

export const addDrill = newToDo => async dispatch => {
  drillRef.push().set(newToDo);
};

export const deleteDrill = completeToDoId => async dispatch => {
  drillRef.child(completeToDoId).remove();
};

export const fetchDrillList = () => async dispatch => {
  drillRef.on("value", snapshot => {
    dispatch({
      type: FETCH_DRILL,
      payload: snapshot.val()
    });
  });
};