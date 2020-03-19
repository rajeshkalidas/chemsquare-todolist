import React, { memo } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = memo(props => (
    <AppBar color="primary" position="static" style={{ height: 64 }}>
    <Toolbar style={{ height: 64 }}>
      <Typography color="inherit">{props.title}</Typography>
    </Toolbar>
  </AppBar>
));

export default Header;
