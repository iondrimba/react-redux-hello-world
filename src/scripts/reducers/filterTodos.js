function filterTodos(state='all', action) {
    switch (action) {
        case 'FILTER_TODOS':
            console.log(action, state);  
            break;
    
        default:
           return state;
    }
    
    return state;
}

export default filterTodos;