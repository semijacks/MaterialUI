import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              React & Material UI Application
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
