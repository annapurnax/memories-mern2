//items within {} indicates use of js logiv
import Post from "./post/post";
import { Grid, CircularProgress } from "@material-ui/core"; //CircularProgress is a loading spinner
import { useSelector } from "react-redux";
import UseStyles from "./styles";
import React from "react";
//react function names should always be start w caps
const Posts = ({ setCurrentId }) => {
  //the props are sent over n over again to the children-prop drilling
  const classes = UseStyles();
  const posts = useSelector((state) => state.posts); //we get access to the whole global state and store
  return !posts.length ? (
    <CircularProgress /> //CircularProgress - if posts.length===0
  ) : (
    <Grid
      className={classes.container}
      container
      alighItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
