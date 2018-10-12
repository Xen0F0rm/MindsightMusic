import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAbout } from "../../actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class AboutListItem extends Component {
    handleCompleteClick = (aboutId) => {
        const { deleteAbout } = this.props;
        deleteAbout(aboutId);
    };

    render() {
        const { aboutId, about } = this.props;
        return (
            <div
                key="aboutName"
                className="col s10 offset-s1 to-do-list-item teal"
            >
                <Typography variant="display1" gutterBottom>
                    {about.title}{" "}
                </Typography>
                <Button onClick={() => this.handleCompleteClick(aboutId)}>
                    Done
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { deleteAbout },
)(AboutListItem);
