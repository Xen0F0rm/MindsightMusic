import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteConcert } from "../../actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class AboutListItem extends Component {
    handleCompleteClick = (concertId) => {
        const { deleteConcert } = this.props;
        deleteConcert(concertId);
    };

    render() {
        const { concertId, concert } = this.props;
        return (
            <div
                key="concertName"
                className="col s10 offset-s1 to-do-list-item teal"
            >
                <Typography variant="display1" gutterBottom>
                    {concert.title}{" "}
                </Typography>
                <Button onClick={() => this.handleCompleteClick(concertId)}>
                    Done
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { deleteConcert },
)(AboutListItem);
