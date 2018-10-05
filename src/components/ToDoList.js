import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ToDoListItem from "./ToDoListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

class ToDoList extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addToDo } = this.props;

    event.preventDefault();

    addToDo({ title: addFormValue });

    this.setState({ addFormValue: "" });
  };

  renderAddForm = () => {
    const { addFormVisible, addFormValue } = this.state;

    if (addFormVisible) {
      return (
        <div>
          <form noValidate autoComplete="off">
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

  renderToDos() {
    const { data } = this.props;
    const toDos = _.map(data, (value, key) => {
      return <ToDoListItem key={key} todoId={key} todo={value} />;
    });

    if (!_.isEmpty(toDos)) {
      return toDos;
    }

    return (
      <div>
        <Typography variant="title" gutterBottom>
          You have completed all the tasks
        </Typography>

        <Typography variant="subheading" gutterBottom>
          Start by clicking add button in the bottom of the screen
        </Typography>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchToDos();
  }

  // Main render method for component.
  render() {
    const { addFormVisible } = this.state;

    return (
      <div>
        {this.renderToDos()}

        <Button
          onClick={() => this.setState({ addFormVisible: !addFormVisible })}
          variant="contained"
          color="primary"
        >
          {addFormVisible ? "Close" : "Add"}
        </Button>

        {this.renderAddForm()}
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(ToDoList);
