import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNews } from "../../actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class NewsListItem extends Component {
    handleCompleteClick = (newsId) => {
        const { deleteNews } = this.props;
        deleteNews(newsId);
    };

    render() {
        const { newsId, news } = this.props;
        return (
            <div
                key="newsName"
                className="col s10 offset-s1 to-do-list-item teal"
            >
                <Typography variant="display1" gutterBottom>
                    {news.title}{" "}
                </Typography>
                <Button onClick={() => this.handleCompleteClick(newsId)}>
                    Done
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { deleteNews },
)(NewsListItem);
