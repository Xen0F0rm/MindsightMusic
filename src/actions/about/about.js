import { aboutRef } from "../../config/firebase";
import { FETCH_ABOUT } from "../types";

export const addAbout = newAbout => async dispatch => {
  aboutRef.push().set(newAbout);
};

export const deleteAbout = aboutId => async dispatch => {
  aboutRef.child(aboutId).remove();
};

export const fetchAboutList = () => async dispatch => {
  aboutRef.on("value", snapshot => {
    dispatch({
      type: FETCH_ABOUT,
      payload: snapshot.val()
    });
  });
};