const initialState = {
    showNew: true,
    showInProgress: true,
    showDone: false
}

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
  case 'FILTER_CHANGE':
    return Object.assign(
        {},
        state,
        action.filter
      )
  default:
    return state
  }
}
