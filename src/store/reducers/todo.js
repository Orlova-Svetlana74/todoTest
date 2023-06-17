import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types/todo';

const initialState = {
  allIds: [],
  byIds: {},
};

// в переменной initialState хранится начальное состояние логики 

export default function todoReducer(state = initialState, action) {
  //todoReducer
  //  — это чистая функция, принимающая два аргумента: state и пришедший action. Если нет state, мы назначаем default в виде переменной
  //  initialState.

  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds, id],

        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      const { [id]: removedTodo, ...updatedByIds } = state.byIds;

      return {
        ...state,
        allIds: state.allIds.filter((todoId) => todoId !== id),
        byIds: updatedByIds,
      };
    }

    default:
      return state;
  }
}
