function toggleTodo(state=false, action) {
    switch (action) {
        case 'TOGGLE_TODO':
            console.log(action, state);  
            break;
    
        default:
           return state;
    }
    
}

export default toggleTodo;