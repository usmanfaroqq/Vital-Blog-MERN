import axios from "axios";
import {
  POST_ERRORS,
  REMOVE_ERRORS,
  SET_LOADER,
  CLOSE_LOADER,
  REDIRECT_TRUE,
  SET_MESSAGE,
  SET_POSTS
} from "../types/PostTypes";
const token = localStorage.getItem("myToken");



export const createAction = (formData) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    dispatch({ type: SET_LOADER });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post("createNew_post", formData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REMOVE_ERRORS });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: SET_MESSAGE, payload: data.msg });
    } catch (error) {
      console.log(error.response);
      const { errors } = error.response.data;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: POST_ERRORS, payload: errors });
    }
  };
}; // Posting content


export const fetchPosts = (id, page) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    dispatch({ type: SET_LOADER });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data: {postData, count, perPage} } = await axios.get(`/posts/${id}/${page}`, config);
      dispatch({type: CLOSE_LOADER});
      dispatch({ type: SET_POSTS, payload: {postData , count, perPage} });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER})
    }
  };
};
