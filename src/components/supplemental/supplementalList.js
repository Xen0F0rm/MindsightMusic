import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import SupplementalListItem from "./supplementalListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class SupplementalList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: "",
    };

    handleInputChange = (event) => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = (event) => {
        const { addFormValue } = this.state;
        const { addSupplemental } = this.props;

        event.preventDefault();

        addSupplemental({ title: addFormValue });

        this.setState({ addFormValue: "" });
    };

    renderSupplementalForm = () => {
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

    renderSupplementalList() {
        const { supplemental } = this.props;
        const supplementalList = _.map(supplemental, (value, key) => {
            return <SupplementalListItem key={key} supplementalId={key} supplemental={value} />;
        });

        if (!_.isEmpty(supplementalList)) {
            return supplementalList;
        }

        return (
            <div>
                <Typography variant="title" gutterBottom>
                    You have completed all the supplemental
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    Start by clicking add button in the bottom of the screen
                </Typography>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchSupplementalList();
    }

    // Main render method for component.
    render() {
        const { addFormVisible } = this.state;

        return (
            <div>
                {this.renderSupplementalList()}

                <Button
                    onClick={() =>
                        this.setState({ addFormVisible: !addFormVisible })
                    }
                    variant="contained"
                    color="primary"
                >
                    {addFormVisible ? "Close" : "Add"}
                </Button>

                {this.renderSupplementalForm()}
            </div>
        );
    }
}

const mapStateToProps = ({ supplemental }) => {
    return {
        supplemental,
    };
};

export default connect(
    mapStateToProps,
    actions,
)(SupplementalList);
