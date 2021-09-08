import axios from "axios";
import {SET_TOKEN, SET_LOADER,REGISTER_ERRORS,CLOSE_LOADER} from '../types/AuthTypes';

export const postRegister = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.post("/register", state, config); // posting register data to server
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("myToken", data.jwtToken);
      dispatch({ type: SET_TOKEN, payload: data.jwtToken });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({
        type: REGISTER_ERRORS,
        payload: error.response.data.errors,
      }); //errors
    }
  };
};
