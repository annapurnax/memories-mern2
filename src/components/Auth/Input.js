//this is a custom component to generalize all the logic(generalized input field)(instead of havin multiple grids wrappin each textfield in auth.js)
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import React from "react";
//wen u have a ternary operator and ur false value is null u can simply use (condition)&&(true)
const Input = (
  //if the parameters are passed without wrappin them in {} u get Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.
  { name, label, type, half, handleChange, autoFocus, handleShowPassword }
) => {
  return (
    <Grid xs={12} md={half ? 6 : 12}>
      <TextField //all dynamic properties
        name={name}
        label={label}
        type={type}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        InputProps={
          //InputProps we show an icon on the right side of the input,for password with which if we click on it we get to see the typed in password
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
