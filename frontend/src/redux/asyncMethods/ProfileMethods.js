import axios from "axios";
import {
  SET_LOADER,
  CLOSE_LOADER,
  REDIRECT_TRUE,
  SET_MESSAGE,
} from "../types/PostTypes";
import {
  GET_PROFILE_ERRORS,
  REMOVE_PROFILE_ERRORS,
} from "../types/ProfileTypes";
import { SET_TOKEN } from "../types/AuthTypes";

export const updateNameMethod = (user) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    dispatch({ type: SET_LOADER });
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.post("/update-userName", user, config);
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("myToken", data.token);
      dispatch({ type: SET_TOKEN, payload: data.token });
      dispatch({type: SET_MESSAGE, payload: data.msg})
      dispatch({ type: REDIRECT_TRUE });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({
        type: GET_PROFILE_ERRORS,
        payload: error.response.data.errors,
      });
    }
  };
};
