export default function reducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_EVENTS':
      return [ ...action.payload ]
    default:
      return state
  }
}
