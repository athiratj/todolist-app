import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getTodos, deleteTodo } from "../actions/todoActions";
import PropTypes from "prop-types";

class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }

  onDeleteClick = (id) => {
    this.props.deleteTodo(id);
  }

  render() {
    const { todos } = this.props.todo;
    return (
      <Container>
        

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {todos.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    close
                    className="remove-btn"
                    onClick={
                      this.onDeleteClick.bind(this, _id)
                    }
                  >
                    Delete
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
TodoList.propTypes = {
  getTodos: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  todo: state.todo,
});
export default connect(mapStateToProps, { getTodos, deleteTodo })(TodoList);
