import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMarching } from "../../actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class MarchingListItem extends Component {
    handleCompleteClick = (marchingId) => {
        const { deleteMarching } = this.props;
        deleteMarching(marchingId);
    };

    render() {
        const { marchingId, marching } = this.props;
        return (
            <div
                key="marchingName"
                className="col s10 offset-s1 to-do-list-item teal"
            >
                <Typography variant="display1" gutterBottom>
                    {marching.title}{" "}
                </Typography>
                <Button onClick={() => this.handleCompleteClick(marchingId)}>
                    Done
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { deleteMarching },
)(MarchingListItem);
