const Authreducer = (state = { authdata: null }, action) => {
  switch (action.type) {
    case "auth":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data })); //we have to save it in the localStorage so tht even on refreshing the page the browser will still knw tht we are logged in
      //we are setting all the login data to storage
      //we are setting the profile with data of the user
      return { ...state, authdata: action?.data };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
export default Authreducer;
