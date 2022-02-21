import { REGISTER_SUCCESS } from "../../../redux/types/userTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"), //after successful login we will set the token into localStorage
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false }; // it will return this json object to store & update the store content as per the new payload.

    default:
      return state;
  }
};
