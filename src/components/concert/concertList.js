import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import ConcertListItem from "./concertListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class ConcertList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: "",
    };

    handleInputChange = (event) => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = (event) => {
        const { addFormValue } = this.state;
        const { addConcert } = this.props;

        event.preventDefault();

        addConcert({ title: addFormValue });

        this.setState({ addFormValue: "" });
    };

    renderConcertForm = () => {
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

    renderConcertList() {
        const { concert } = this.props;
        const concertList = _.map(concert, (value, key) => {
            return <ConcertListItem key={key} concertId={key} concert={value} />;
        });

        if (!_.isEmpty(concertList)) {
            return concertList;
        }

        return (
            <div>
                <Typography variant="title" gutterBottom>
                    You have completed all the concerts
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    Start by clicking add button in the bottom of the screen
                </Typography>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchConcertList();
    }

    // Main render method for component.
    render() {
        const { addFormVisible } = this.state;

        return (
            <div>
                {this.renderConcertList()}

                <Button
                    onClick={() =>
                        this.setState({ addFormVisible: !addFormVisible })
                    }
                    variant="contained"
                    color="primary"
                >
                    {addFormVisible ? "Close" : "Add"}
                </Button>

                {this.renderConcertForm()}
            </div>
        );
    }
}

const mapStateToProps = ({ concert }) => {
    return {
        concert,
    };
};

export default connect(
    mapStateToProps,
    actions,
)(ConcertList);
