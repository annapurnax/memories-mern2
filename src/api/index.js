import axios from "axios"; //used to make api calls
const url = "https://memories-mern2.herokuapp.com/posts"; //pointing to backend route
export const fetchPosts = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likedPost = (id) => axios.patch(`${url}/${id}/likedpost`);
