import {getRandomNum} from '../utils/helpers';
import createColorArr from '../utils/colors';
import {defineFontColor} from '../utils/helpers';
import * as actions from './actions';

//CREATE COLORS ARRAY FROM OBJECT FILLED WITH COLORS
const colors = createColorArr(); //IS IT OK?

//INITIAL APPLICATION STATE
const initialState = {
  quotes: [],
  colors: [],
  currentColor: '#600707',
  fontColor: '#fafafa',
  currentQuote: '',
  buttonDisabled: true
}

//ROOT (AND THE ONLY ONE) REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_QUOTES:
      return {
        ...state,
        //quotes: action.fillArr //IS THIS AN IMMUTABLE WAY
        quotes: state.quotes.concat(action.fillArr) //WHICH WAY IS BETTER?
      };
    case actions.ENABLE_BUTTON:
      return{
        ...state,
        buttonDisabled: false
      }
    case actions.GET_COLORS:
      return {
        ...state,
        colors: state.colors.concat(colors)
      }
    case actions.SET_RAND_QUOTE:
      let randQuote = state.quotes[getRandomNum()];
      return {
        ...state,
        currentQuote: randQuote
      };
    case actions.CHANGE_BG_COLOR:
      let randColor = state.colors[Math.floor(Math.random() * 143)];
      return {
        ...state,
        currentColor: randColor
      };
    case actions.DEFINE_FONT_COLOR:
      let fontColor = defineFontColor(state.currentColor);
      if (fontColor === 'light') {
        return {
          ...state,
          fontColor: '#000',
        }
      } else if (fontColor === 'dark') {
        return {
          ...state,
          fontColor: '#fafafa',
        }
      }
    default:
      return state;
  }
}


export default reducer;
