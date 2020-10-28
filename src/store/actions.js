export const UPDATE_WHO = "UPDATE_WHO";
export const UPDATE_WHAT = "UPDATE_WHAT";
export const UPDATE_WHICH = "UPDATE_WHICH";
export const UPDATE_GUIDED = "update_guided";

export const addGuidedBook = (data) => {
  return {
    type: UPDATE_GUIDED,
    payload: data,
  };
};
