import React, { useEffect, useState } from "react";
import { Grow, Grid, Container } from "@material-ui/core";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux"; //to dispatch an action
import Posts from "../posts/posts";
import Form from "../form/form";
const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch(); //is a hook
  useEffect(() => {
    dispatch(getPosts()); //to dispatch actions wen theres a change in(the second parameter passed []) currentId or wen an action is dispatched
  }, [currentId, dispatch]); //wen the form is cleared the currentId will be set to null so due to this change in the currentId getPosts will be dispatched and we need not refresh the page on updating
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};
export default Home;
