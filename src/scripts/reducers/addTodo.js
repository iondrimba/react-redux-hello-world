function addTodo(state={name:'', enabled:false},action) {
     
    switch (action.type) {
        case 'ADD_TODO':
            return {
                name:action.todo.name,
                enabled:action.todo.enabled
            };
    }
    return state;    
}

export default addTodo;