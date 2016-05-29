const toggleTodo = (todo) => {
  return {
    type: 'TOGGLE_TODO',
    todo
  };
};

export default toggleTodo;