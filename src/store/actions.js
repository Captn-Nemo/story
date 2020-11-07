export const UPDATE_WHO = "UPDATE_WHO";
export const UPDATE_WHAT = "UPDATE_WHAT";
export const UPDATE_WHICH = "UPDATE_WHICH";
export const UPDATE_GUIDED = "update_guided";
export const UPDATE_PAYMENT = "update_payment";
export const UPDATE_BOOK_MODE = "update_book_mode";
export const NORMAL_ORDER = "normal_order";
export const LONGBOOK_ORDER = "longbook_order";
export const ORDER_TYPE = "order_type";
export const UPDATE_FORM = "update_form";

export const updateForm = (data) => {
  return {
    type: UPDATE_FORM,
    payload: data,
  };
};
export const addGuidedBook = (data) => {
  return {
    type: UPDATE_GUIDED,
    payload: data,
  };
};
export const addPaymentStatus = () => {
  return {
    type: UPDATE_PAYMENT,
  };
};
export const addBookMode = (data) => {
  return {
    type: UPDATE_BOOK_MODE,
    payload: data,
  };
};

export const addNormalOrder = (data) => {
  return {
    type: NORMAL_ORDER,
    payload: data,
  };
};
export const addLongBook = (data) => {
  return {
    type: LONGBOOK_ORDER,
    payload: data,
  };
};
export const addOrderType = (data) => {
  return {
    type: ORDER_TYPE,
    payload: data,
  };
};
