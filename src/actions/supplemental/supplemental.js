import { supplementalRef } from "../../config/firebase";
import { FETCH_SUPPLEMENTAL } from "../types";

export const addSupplemental = newToDo => async dispatch => {
  supplementalRef.push().set(newToDo);
};

export const deleteSupplemental = completeToDoId => async dispatch => {
  supplementalRef.child(completeToDoId).remove();
};

export const fetchSupplementalList = () => async dispatch => {
  supplementalRef.on("value", snapshot => {
    dispatch({
      type: FETCH_SUPPLEMENTAL,
      payload: snapshot.val()
    });
  });
};