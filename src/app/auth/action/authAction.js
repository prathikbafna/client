//Register user
import axios from "axios";
import { REGISTER_SUCCESS } from "../../../redux/types/userTypes";
export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/users", formData);

    //success
    //failure
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {}
};
