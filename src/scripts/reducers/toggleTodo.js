function toggleTodo(state=[],action) {
    
    switch (action.type) {
        case 'TOGGLE_TODO': {
            let a=state.find(x => x.id==action.todo.id);
            a.completed=!a.completed;
            return [
                ...state
            ];   
        }           
    
        default:
           return state;
    }
    
}

export default toggleTodo;