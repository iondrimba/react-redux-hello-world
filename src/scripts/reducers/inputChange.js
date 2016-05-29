function inputChange(state='', action) {
      
    switch (action.type) {
        case 'INPUT_CHANGE':              
            state = action.name;
        break;
    }
    
    return state;
}

export default inputChange;