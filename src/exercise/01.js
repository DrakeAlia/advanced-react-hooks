// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// all that we needed to change here to support both the function and the action object is we checked the type of the 
// action, and if it's a function, then we called that action with the current state. 
// Otherwise, we assume the action was the object that we wanted to spread, and we spread that value in either case.
const countReducer = (state, action) => ({
  ...state, 
  ...(typeof action === 'function' ? action(state) : action),
})

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
