import React from "react"; //useEffect is a component to mount and update
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //wrap everytg in the BrowserRouter
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
//we broke down the whole code into navbar and Home for the use of Route
//is the only component which is parent to both posts and form so we are able to share the id on app.js
const App = () => {
  return (
    //container centres everytg , typography stands for any textual element(gives a nice looking font),Grow provides animation
    //xs={12}-takes the full width on xsmall devices sm={7}
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
