import { concertRef } from "../../config/firebase";
import { FETCH_CONCERT } from "../types";

export const addConcert = newToDo => async dispatch => {
  concertRef.push().set(newToDo);
};

export const deleteConcert = completeToDoId => async dispatch => {
  concertRef.child(completeToDoId).remove();
};

export const fetchConcertList = () => async dispatch => {
  concertRef.on("value", snapshot => {
    dispatch({
      type: FETCH_CONCERT,
      payload: snapshot.val()
    });
  });
};