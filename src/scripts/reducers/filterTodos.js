function filterTodos(state='all', action) {
    switch (action.type) {
        case 'FILTER_TODOS':
            return action.filter;
        default:
           return state;
    }
}

export default filterTodos;