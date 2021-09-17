//reducers-is a function which accepts the state and action and then based on the action type we return an action or state changed by the action
//switch statement is used
//state initial value shd always be set which should be an object

//state is renamed as posts here
//map() function returns an array
const reducers = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; //payload is the data
    case "CREATE":
      return [
        ...posts,
        action.payload, //action.payload is the new post
      ];
    case "UPDATE":
    case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      ); //action.payload is the new updated post
    //action.payload is the updated post
    case "DELETE":
      return posts.filter((post) => post._id !== action.payload); //we are keepin all the posts except the one w id of action.payload

    default:
      return posts;
  }
};
export default reducers;
