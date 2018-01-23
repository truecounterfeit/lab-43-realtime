// TODO: Create reducers 

export default (state=[], {type, payload}) => {
  switch(type){
    // TODO: add a new message to the state with content and meta
    case 'LOGIN': 
    // TODO: return the default state (nothing)
    case 'LOGOUT': 
    // TODO: Add payload
    case 'USER_CONNECTED':
    // TODO: Add payload
    case 'USER_DISCONNECTED':
    // TODO: Add payload
    case 'MESSAGE':
    default:
      return state
  }
}
