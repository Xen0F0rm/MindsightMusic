import { 
    FETCH_MARCHING
  } from "../actions/types";
  
  export default (state = {}, action) => {
      switch (action.type) {
          case FETCH_MARCHING:
              return action.payload;
          default:
              return state;
      }
  };
  