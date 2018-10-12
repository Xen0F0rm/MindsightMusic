import { 
    FETCH_DRILL
  } from "../actions/types";
  
  export default (state = {}, action) => {
      switch (action.type) {
          case FETCH_DRILL:
              return action.payload;
          default:
              return state;
      }
  };
  