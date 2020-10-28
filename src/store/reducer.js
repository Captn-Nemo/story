import { UPDATE_GUIDED } from "./actions";
const initialSate = {
  guided: {},
  categories: {
    WHO: null,
    WHAT: null,
    WHICH: null,
  },
  flagForm: false,
  showForm: false,
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case UPDATE_GUIDED:
      return {
        ...state,
        guided: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.cat]: action.val,
        },
      };
    case "TOGGLE_FORM":
      return {
        ...state,
        flagForm: action.flag,
      };
    case "SHOW_FORM":
      return {
        ...state,
        showForm: true,
      };
    case "HIDE_FORM":
      return {
        ...state,
        showForm: false,
      };
    default:
      return state;
  }
};

export default reducer;
