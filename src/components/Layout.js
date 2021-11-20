import { Grid } from "@mui/material";
import React from "react"; 

const Layout = (props) => { /* Genel Lay out (App.js'i sade tutmak için)*/
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ mt:5 }}
    >
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default Layout;
