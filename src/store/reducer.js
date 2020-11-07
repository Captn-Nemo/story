import {
  UPDATE_GUIDED,
  UPDATE_PAYMENT,
  UPDATE_BOOK_MODE,
  NORMAL_ORDER,
  LONGBOOK_ORDER,
  ORDER_TYPE,
  UPDATE_FORM,
} from "./actions";
const initialSate = {
  guided: {},
  normal: {},
  form: {},
  orderType: 1,
  longBook: {},
  paid: false,
  book_mode: "e-book",
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case UPDATE_GUIDED:
      return {
        ...state,
        guided: action.payload,
      };
    case UPDATE_FORM:
      return {
        ...state,
        form: action.payload,
      };
    case UPDATE_PAYMENT:
      return {
        ...state,
        paid: true,
      };
    case UPDATE_BOOK_MODE:
      return {
        ...state,
        book_mode: action.payload,
      };
    case NORMAL_ORDER:
      return {
        ...state,
        normal: action.payload,
      };
    case LONGBOOK_ORDER:
      return {
        ...state,
        longBook: action.payload,
      };
    case ORDER_TYPE:
      return {
        ...state,
        orderType: action.payload,
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
