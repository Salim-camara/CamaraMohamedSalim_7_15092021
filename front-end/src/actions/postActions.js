import Axios from "axios";

const url = 'http://localhost:3001/profils';

export const GET_POSTS = "GET_POSTS";


export const getPosts = () => {
    return (dispatch) => {
        return Axios.get(url)
                    .then((res) => {
                        dispatch({ type: GET_POSTS, payload: res.data });
                        console.log(res);
                    })
                    .catch((err) => console.log(err));
    }
}