import axios from 'axios';
import {CREATE_POST, SET_LOADER, CLOSE_LOADER} from "../types/PostTypes";
const token = localStorage.getItem('myToken');
export const createAction = (formData) => {
    return async(dispatch) => {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            const {data} = await axios.post('createNew_post', formData, config);
            console.log(data)
        } catch (error) {
            console.log(error.message);
        }
    }
}