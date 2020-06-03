import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { connect } from 'react-redux';
import { getTodos } from '../actions/todoActions';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
  
  componentDidMount() {
    this.props.getTodos();
  }


  render() {
    const { todos } = this.props.todo;
    return (
      <Container>
        <Button
                color="dark"
                size="sm"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("enter item");
            if (name) {
              this.setState((state) => ({
                todos: [...state.todos, { id: uuidv4(), name }],
              }));
            }
          }}
        >
          Add Task
        </Button>

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {todos.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button close
                    className="remove-btn"
                    
                    onClick={() => {
                        this.setState(state => ({
                          todos:state.todos.filter(todo=> todo.id !==id)
                      }));
                    }}
                  >Delete</Button>
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
  item:PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  todo: state.todo
});
export default connect(mapStateToProps, {getTodos})(TodoList);
