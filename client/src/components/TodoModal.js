import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class TodoModal extends React.Component {
  state = {
    modal: false,
    name: "",
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      name: this.state.name,
    };

    // Add task via addTodo action
    this.props.addTodo(newTodo);
    // Close modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Task
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add a Task</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="todo">Task</Label>
                <Input
                  type="text"
                  name="name"
                  id="todo"
                  placeholder="Add task here..."
                  onChange={this.handleChange}
                ></Input>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Task
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { addTodo })(TodoModal);
