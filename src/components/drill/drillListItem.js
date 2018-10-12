import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteDrill } from "../../actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class DrillListItem extends Component {
    handleCompleteClick = (drillId) => {
        const { deleteDrill } = this.props;
        deleteDrill(drillId);
    };

    render() {
        const { drillId, drill } = this.props;
        return (
            <div
                key="drillName"
                className="col s10 offset-s1 to-do-list-item teal"
            >
                <Typography variant="display1" gutterBottom>
                    {drill.title}{" "}
                </Typography>
                <Button onClick={() => this.handleCompleteClick(drillId)}>
                    Done
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { deleteDrill },
)(DrillListItem);
