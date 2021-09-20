import axios from "axios";
import {
  POST_ERRORS,
  REMOVE_ERRORS,
  SET_LOADER,
  CLOSE_LOADER,
  REDIRECT_TRUE,
  SET_MESSAGE,
  SET_POSTS,
  SET_POST,
  POST_REQUEST,
  SET_UPDATE_ERRORS,
  UPDATE_IMAGE_ERRORS,
} from "../types/PostTypes";

export const allHomePosts = (page) => {
  return async(dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
        const {data: {postData,  count, perPage}} = await axios.get(`/home/${page}`)
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_POSTS, payload: { postData, count, perPage } });

    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      console.log(error);
    }
  };
};
