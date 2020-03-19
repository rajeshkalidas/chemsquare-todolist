import React, { memo } from "react";
import {Paper} from "@material-ui/core";
import Header from "./Header";

const Layout = memo(props => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  >
   <Header title="CHEMSQUARE TODO APP" />
    {props.children}
  </Paper>
));

export default Layout;
