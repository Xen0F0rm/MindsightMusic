import React, { Component } from "react";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="fixed" color="default">
                    <Toolbar>
                        <Typography variant="headline" color="inherit">
                            Mindsight Music
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default connect()(Navbar);

// export default connect(
//     null,
//     { deleteAbout },
// )(Navbar);
