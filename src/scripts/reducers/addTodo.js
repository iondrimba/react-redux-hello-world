function addTodo(state,action) {
    let defaultTodo={ name: '',enabled: false };
    
    switch (action) {
        case 'ADD_TODO':
            console.log(action, state);  
            break;
    }

    return Object.assign({}, state, defaultTodo);
    
}

export default addTodo;