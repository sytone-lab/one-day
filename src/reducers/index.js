import * as types from '../actions/types';

const INITIAL_STATE = {
  todos: {
    data: []
  },
  snackBar: {
    isTriggered: false,
    message: ''
  }
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_TODOS:
      return {
        ...state,
        todos: {
          data: action.payload || []
        }
      };
    case types.CREATE_TODO:
      return {
        ...state,
        todos: {
          data: state.todos.data.concat([action.payload])
        }
      };
    case types.TRIGGER_SNACKBAR:
      return {
        ...state,
        snackBar: {
          isTriggered: true,
          message: action.payload
        }
      };
    case types.UNTRIGGER_SNACKBAR:
      return {
        ...state,
        snackBar: {
          isTriggered: false,
          message: ''
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
