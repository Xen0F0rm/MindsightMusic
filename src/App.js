import React, { Component } from "react";
import NewsList from "./components/news/newsList";

import { withStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1,
  }
};

class App extends Component {
    render() {
        return (
          <div className={styles.root}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="headline" color="inherit">
                  Mindsight Music
                </Typography>
              </Toolbar>
            </AppBar>
            <NewsList />
          </div>
        );
    }
}

export default withStyles(styles)(App);
