import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import NewsListItem from "./newsListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class NewsList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: "",
    };

    handleInputChange = (event) => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = (event) => {
        const { addFormValue } = this.state;
        const { addNews } = this.props;

        event.preventDefault();

        addNews({ title: addFormValue });

        this.setState({ addFormValue: "" });
    };

    renderNewsForm = () => {
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

    renderNewsList() {
        const { news } = this.props;
        const newsList = _.map(news, (value, key) => {
            return <NewsListItem key={key} newsId={key} news={value} />;
        });

        if (!_.isEmpty(newsList)) {
            return newsList;
        }

        return (
            <div>
                <Typography variant="title" gutterBottom>
                    You have completed all the news
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    Start by clicking add button in the bottom of the screen
                </Typography>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchNewsList();
    }

    // Main render method for component.
    render() {
        const { addFormVisible } = this.state;

        return (
            <div>
                {this.renderNewsList()}

                <Button
                    onClick={() =>
                        this.setState({ addFormVisible: !addFormVisible })
                    }
                    variant="contained"
                    color="primary"
                >
                    {addFormVisible ? "Close" : "Add"}
                </Button>

                {this.renderNewsForm()}
            </div>
        );
    }
}

const mapStateToProps = ({ news }) => {
    return {
        news,
    };
};

export default connect(
    mapStateToProps,
    actions,
)(NewsList);
