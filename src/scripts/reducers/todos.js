import toggleTodo from './toggleTodo.js';

function todos(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO': {
            if(action.todo.name.length>0) {
                return [
                    ...state,
                    {
                        label: action.todo.name,
                        completed: action.todo.enabled,
                        id: state.length
                    }
                ];
            }
            return state;
        }
        case 'TOGGLE_TODO': {
            return toggleTodo(state, action);
        }
        default:
            return state;

    }
}

export default todos;