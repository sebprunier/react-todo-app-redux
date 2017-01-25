export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
}

export const loadTodos = (todos) => {
  return {
    type: 'LOAD_TODOS',
    todos
  }
}
