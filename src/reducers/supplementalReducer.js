import { 
    FETCH_SUPPLEMENTAL
  } from "../actions/types";
  
  export default (state = {}, action) => {
      switch (action.type) {
          case FETCH_SUPPLEMENTAL:
              return action.payload;
          default:
              return state;
      }
  };
  