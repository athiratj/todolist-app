import { GET_TODOS, ADD_TODO, DELETE_TODO } from "./types";

export const getTodos = () => {
    return {
        type:GET_TODOS
    }
}