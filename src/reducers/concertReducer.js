import { 
    FETCH_CONCERT
  } from "../actions/types";
  
  export default (state = {}, action) => {
      switch (action.type) {
          case FETCH_CONCERT:
              return action.payload;
          default:
              return state;
      }
  };
  