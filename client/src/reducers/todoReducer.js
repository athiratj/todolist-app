import { v4 as uuidv4 } from "uuid";
import { GET_TODOS, ADD_TODO, DELETE_TODO } from "../actions/types";

const initialState = {
  todos: [
    { id: uuidv4(), name: "Clean room" },
    { id: uuidv4(), name: "Complete the project" },
    { id: uuidv4(), name: "Prepare for exam" },
    { id: uuidv4(), name: "Water the plants" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
