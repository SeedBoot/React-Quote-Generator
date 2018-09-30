import { colorArr } from '../utils/colors';
import {defineFontColor} from '../utils/helpers';

export const FETCH_QUOTES = 'FETCH_QUOTES';
export const SET_RAND_QUOTE = 'SET_RAND_QUOTE';
export const CHANGE_BG_COLOR = 'CHANGE_BG_COLOR';
export const DEFINE_FONT_COLOR = 'DEFINE_FONT_COLOR';

//INITIAL APPLICATION STATE
const initialState = {
  quotes: [],
  colors: colorArr,
  currentColor: '',
  fontColor: '',
  currentQuote: '',
  buttonDisabled: true,
  status: undefined
}

//ROOT (AND THE ONLY ONE) REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_QUOTES:
      return {
        ...state,
        quotes: [
          ...action.fillArr
        ],
      };

    case SET_RAND_QUOTE:
      return {
        ...state,
        currentQuote: state.quotes[Math.floor(Math.random() * state.quotes.length)],
        currentColor: state.colors[Math.floor(Math.random() * state.colors.length)],
        fontColor: defineFontColor(state.currentColor) === 'light' ? '#000' : '#fafafa',
      };

    default:
      return state;
  }
}

export default reducer;
