import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSupplemental } from "../../actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class SupplementalListItem extends Component {
    handleCompleteClick = (supplementalId) => {
        const { deleteSupplemental } = this.props;
        deleteSupplemental(supplementalId);
    };

    render() {
        const { supplementalId, supplemental } = this.props;
        return (
            <div
                key="supplementalName"
                className="col s10 offset-s1 to-do-list-item teal"
            >
                <Typography variant="display1" gutterBottom>
                    {supplemental.title}{" "}
                </Typography>
                <Button onClick={() => this.handleCompleteClick(supplementalId)}>
                    Done
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { deleteSupplemental },
)(SupplementalListItem);
