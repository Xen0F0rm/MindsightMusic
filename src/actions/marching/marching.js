import { marchingRef } from "../../config/firebase";
import { FETCH_MARCHING } from "../types";

export const addMarching = newToDo => async dispatch => {
  marchingRef.push().set(newToDo);
};

export const deleteMarching = completeToDoId => async dispatch => {
  marchingRef.child(completeToDoId).remove();
};

export const fetchMarchingList = () => async dispatch => {
  marchingRef.on("value", snapshot => {
    dispatch({
      type: FETCH_MARCHING,
      payload: snapshot.val()
    });
  });
};