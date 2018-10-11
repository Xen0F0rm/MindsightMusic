import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class ToDoListItem extends Component {
    handleCompleteClick = (completeToDoId) => {
        const { completeToDo } = this.props;
        completeToDo(completeToDoId);
    };

    render() {
        const { todoId, todo } = this.props;
        return (
            <div
                key="toDoName"
                className="col s10 offset-s1 to-do-list-item teal"
            >
                <Typography variant="display1" gutterBottom>
                    {todo.title}{" "}
                </Typography>
                <Button onClick={() => this.handleCompleteClick(todoId)}>
                    Done
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    { completeToDo },
)(ToDoListItem);
