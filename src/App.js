import React, {Component} from "react";
import NewsList from "./components/news/newsList";

import {withStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/_global/navbar"

import "./styles/home.css";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

const styles = {
    root: {
        flexGrow: 1,
    },
};

class App extends Component {
    render() {
        return (
            <div className={styles.root}>
                <CssBaseline/>
                <Navbar />
                <div className="header">
                    <div className="headerGradient"/>
                    <div className="headerJumbotron">
                        <div className="homeLeft">
                            <Typography variant="display2" color="inherit">
                                MINDSIGHT MUSIC
                            </Typography>
                            <h3 className="homeSubTitle">
                                JM RODRIGUEZ MUSIC PRODUCTIONS
                            </h3>
                            <p className="homeParagraph">
                                Mindsight Music offers original marching band
                                shows at a competitive price. Providing you with
                                the Highest Level of customer service, and an
                                attainable, high quality product to match.
                                Exciting productions composed by experienced
                                music educators who are actively involved in the
                                activity. Custom Arrangements/Shows Available.
                            </p>
                            <Button
                                variant="contained"
                            >
                                View Shows
                            </Button>
                        </div>
                        <div className="homeRight">
                            <video
                                className="homeVideo"
                                controls={"true"}
                                autoPlay={"true"}
                            >
                                <source
                                    src="https://s3-us-west-2.amazonaws.com/www.mindsightmusic.com/videos/Mindsight+Intro+Video+-+HD.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <NewsList/>
            </div>
        );
    }
}

export default withStyles(styles)(App);
