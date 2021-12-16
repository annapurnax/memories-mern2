//rafce shortcut
import React, { useState } from "react";
import {
  Typography,
  Avatar,
  Button,
  Paper,
  Grid,
  Container,
  Icon,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login"; //In GoogleLogin  for clientId u need to pass in ur own client google Id , render-how the button shd look like,renderProps is a callback function in which we add a material UI button
import useStyles from "./styles";
import Input from "./Input";
import googleIcon from "./Icon";
import { useDispatch } from "react-redux";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};
//autofocus first element to focus on
//password's type will be text which onclick shd change to password so we need to create a variable which will handle the showPassword for which weve used useState
//based on the boolean value of isSignup we switch frm sign in to sign up
const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false); //form changes with change of state in switchMode
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false); //initially it is set to false
  const handleSubmit = () => {
    console.log(formData);
  };
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup((previsSignup) => !previsSignup); //toggle action, form changes from sign up to sign in or vise versa with the change in state
  };
  const handleShowPassword = () => {
    //will toggle the state of the password
    setShowPassword((prevShowPassword) => !prevShowPassword); //simple toggle action //wenever u r changin the state using the prev state u have to create a callback function
  };
  const googleSuccess = async (res) => {
    //res->obj of the logged in email  //?. is an optional chainin operator using which we dont get an error if we dont have access to the res object
    const result = res?.profileObj; //we r not goin to get an error if res doesnt have a value,result will be undefined if res has no value
    const token = res?.tokenId;
    try {
      dispatch({ type: "auth", data: { result, token } });
    } catch (error) {
      console.log(error);
    }
  }; //
  const googleFailure = (err) => {
    console.log(err);
    console.log("Google Sign In was unsuccessful.Try again later");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup ? (
              <>
                <Input
                  name="firstName"
                  label="first Name"
                  type=""
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            ) : null}
            <Input
              name="email"
              label="email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="72305602202-45p4helajhrs01cm0ifn7dl6n1144132.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<googleIcon />}
                variant="contained"
              >
                Google Login
              </Button>
            )}
            //other GoogleLogin props
            onSuccess={googleSuccess} //onSuccess we are gonna call googleSuccess function
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Dont have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
