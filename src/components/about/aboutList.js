import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AboutListItem from "./aboutListItem";

class AboutList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: "",
    };

    handleInputChange = (event) => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = (event) => {
        const { addFormValue } = this.state;
        const { addAbout } = this.props;

        event.preventDefault();

        addAbout({ title: addFormValue });

        this.setState({ addFormValue: "" });
    };

    renderAboutForm = () => {
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

    renderAboutList() {
        const { about } = this.props;

        const aboutList = _.map(about, (value, key) => {
            return <AboutListItem key={key} aboutId={key} about={value} />;
        });

        if (!_.isEmpty(aboutList)) {
            return aboutList;
        }

        return (
            <div>
                <Typography variant="title" gutterBottom>
                    You have completed all the abouts
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    Start by clicking add button in the bottom of the screen
                </Typography>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchAboutList();
    }

    // Main render method for component.
    render() {
        const { addFormVisible } = this.state;

        return (
            <div>
                {this.renderAboutList()}

                <Button
                    onClick={() =>
                        this.setState({ addFormVisible: !addFormVisible })
                    }
                    variant="contained"
                    color="primary"
                >
                    {addFormVisible ? "Close" : "Add"}
                </Button>

                {this.renderAboutForm()}
            </div>
        );
    }
}

const mapStateToProps = ({ about }) => {
    return {
        about,
    };
};

export default connect(
    mapStateToProps,
    actions,
)(AboutList);
