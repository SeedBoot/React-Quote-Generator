import createColorArr from '../utils/colors';
import * as actions from './actions';

//CREATE COLORS ARRAY FROM OBJECT FILLED WITH COLORS
const colors = createColorArr(); //IS IT OK?

//INITIAL APPLICATION STATE
const initialState = {
  quotes: [],
  colors: [],
}

//ROOT (AND THE ONLY ONE) REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_QUOTES:
      return {
        ...state,
        quotes: state.quotes.concat(action.fillArr)
      };
    case actions.GET_COLORS:
      return {
        ...state,
        colors: state.colors.concat(colors)
      }
    default:
      return state;
  }
}

export default reducer;
