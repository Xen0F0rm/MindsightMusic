import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import MarchingListItem from "./marchingListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class MarchingList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: "",
    };

    handleInputChange = (event) => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = (event) => {
        const { addFormValue } = this.state;
        const { addMarching } = this.props;

        event.preventDefault();

        addMarching({ title: addFormValue });

        this.setState({ addFormValue: "" });
    };

    renderMarchingForm = () => {
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

    renderMarchingList() {
        const { marching } = this.props;
        const marchingList = _.map(marching, (value, key) => {
            return <MarchingListItem key={key} marchingId={key} marching={value} />;
        });

        if (!_.isEmpty(marchingList)) {
            return marchingList;
        }

        return (
            <div>
                <Typography variant="title" gutterBottom>
                    You have completed all the marching
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    Start by clicking add button in the bottom of the screen
                </Typography>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchMarchingList();
    }

    // Main render method for component.
    render() {
        const { addFormVisible } = this.state;

        return (
            <div>
                {this.renderMarchingList()}

                <Button
                    onClick={() =>
                        this.setState({ addFormVisible: !addFormVisible })
                    }
                    variant="contained"
                    color="primary"
                >
                    {addFormVisible ? "Close" : "Add"}
                </Button>

                {this.renderMarchingForm()}
            </div>
        );
    }
}

const mapStateToProps = ({ marching }) => {
    return {
        marching,
    };
};

export default connect(
    mapStateToProps,
    actions,
)(MarchingList);
