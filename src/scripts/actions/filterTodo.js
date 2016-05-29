const filterTodos = (filter) => {
  return {
    type: 'FILTER_TODOS',
    filter
  };
};

export default filterTodos;