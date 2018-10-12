import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import DrillListItem from "./drillListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class DrillList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: "",
    };

    handleInputChange = (event) => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = (event) => {
        const { addFormValue } = this.state;
        const { addDrill } = this.props;

        event.preventDefault();

        addDrill({ title: addFormValue });

        this.setState({ addFormValue: "" });
    };

    renderDrillForm = () => {
        const { addFormVisible, addFormValue } = this.state;

        if (addFormVisible) {
            return (
                <div>
                    <form
                        noValidate
                        autoComplete="off"
                        onSubmit={this.handleFormSubmit}
                    >
                        <TextField
                            label="Title"
                            value={addFormValue}
                            onChange={this.handleInputChange}
                            type="text"
                        />
                    </form>
                </div>
            );
        }
    };

    renderDrillList() {
        const { drill } = this.props;
        const drillList = _.map(drill, (value, key) => {
            return <DrillListItem key={key} drillId={key} drill={value} />;
        });

        if (!_.isEmpty(drillList)) {
            return drillList;
        }

        return (
            <div>
                <Typography variant="title" gutterBottom>
                    You have completed all the drills
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    Start by clicking add button in the bottom of the screen
                </Typography>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchDrillList();
    }

    // Main render method for component.
    render() {
        const { addFormVisible } = this.state;

        return (
            <div>
                {this.renderDrillList()}

                <Button
                    onClick={() =>
                        this.setState({ addFormVisible: !addFormVisible })
                    }
                    variant="contained"
                    color="primary"
                >
                    {addFormVisible ? "Close" : "Add"}
                </Button>

                {this.renderDrillForm()}
            </div>
        );
    }
}

const mapStateToProps = ({ drill }) => {
    return {
        drill,
    };
};

export default connect(
    mapStateToProps,
    actions,
)(DrillList);
