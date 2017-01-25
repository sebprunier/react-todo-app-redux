const initialState = []

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
  case 'ADD_TODO':
    return [
      Object.assign(action.todo, {id: state.length + 1}),
      ...state
    ]
  case 'LOAD_TODOS':
    return action.todos
  default:
    return state
  }
}
