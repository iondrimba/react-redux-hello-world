function inputChange(state='', action) {
      
    switch (action.type) {
        case 'INPUT_CHANGE':              
            return action.name;
    }
    
    return state;
}

export default inputChange;