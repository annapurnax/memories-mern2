import * as api from "../api/index"; //importin fetchposts
//actions-functions tht return actions
//payload will store all the data
//redux thunk is used with which we can add another arrow function-dealing with asynchronous logic
export const getPosts = () => async (dispatch) => {
  try {
    //try to fetch data from the api
    const { data } = await api.fetchPosts(); //we are gettin the response from the api,in the response we always have a data object which is returned from the backend,data represents the posts
    dispatch({ type: "FETCH_ALL", payload: data }); //dispatchin an action from the data from our backend
    console.log(data);
  } catch (error) {
    console.log(error.message);
    console.log("couldnt connect");
  }
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
    console.log("couldnt create");
  }
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
    console.log("couldnt update");
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
    console.log("couldnt delete");
  }
};
export const likedPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likedPost(id);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
    console.log("couldnt like");
  }
};
