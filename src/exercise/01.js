// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'


// what we did here was we had this setState type of simulation here with our count reducer, 
// const countReducer = (state, action) => ({
//   ...state, 
//   ...(typeof action === 'function' ? action(state) : action),
// })

// but as your reducer gets more complex, having this format for your reducer can make it a little bit easier to maintain.
//  This convention isn't a requirement of using React useReducer, but it's helpful for some cases.
function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}
// but we wanted to have a more Redux style reducer, not just because the convention is a great one, 
// and should always be applied.
function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}



function App() {
  return <Counter />
}

export default App
