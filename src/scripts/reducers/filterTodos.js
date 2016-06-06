function filterTodos(state='all', action) {
    switch (action) {
        case 'FILTER_TODOS':
            console.log(action, state);  
            break;
        case '1FILTER_TODOS':
            console.log(action, state);  
            break;
        default:
           return state;
    }
}

export default filterTodos;