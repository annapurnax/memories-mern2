import React, { useEffect, useState } from "react"; //useEffect is a component to mount and update
import { Container, Typography, Grid, Grow, AppBar } from "@material-ui/core";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux"; //to dispatch an action
import memories from "./images/memories.png";
import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import UseStyles from "./styles";
//is the only component which is parent to both posts and form so we are able to share the id on app.js
function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = UseStyles();
  const dispatch = useDispatch(); //is a hook
  useEffect(() => {
    dispatch(getPosts()); //to dispatch actions
  }, [currentId, dispatch]); //wen the form is cleared the currentId will be set to null so due to this change in the currentId getPosts will be dispatched and we need not refresh the page on updating
  return (
    //container centres everytg , typography stands for any textual element(gives a nice looking font),Grow provides animation
    //xs={12}-takes the full width on xsmall devices sm={7}
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="100"
          width="100"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
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
    </Container>
  );
}

export default App;
