import { newsRef } from "../../config/firebase";
import { FETCH_NEWS } from "../types";

export const addNews = newToDo => async dispatch => {
  newsRef.push().set(newToDo);
};

export const deleteNews = completeToDoId => async dispatch => {
  newsRef.child(completeToDoId).remove();
};

export const fetchNewsList = () => async dispatch => {
  newsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_NEWS,
      payload: snapshot.val()
    });
  });
};