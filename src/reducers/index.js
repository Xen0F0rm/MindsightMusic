
import { combineReducers } from "redux";

import about from "./aboutReducer";
import concert from "./concertReducer";
import drill from "./drillReducer";
import marching from "./marchingReducer";
import news from "./newsReducer";
import supplemental from "./supplementalReducer";

export default combineReducers({
  about,
  concert,
  drill,
  marching,
  news,
  supplemental
});