// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Our count reducer was updated to accept the whole state object and the updated version of that state object. 
// We merged these two things to get our new state values.
const countReducer = (state, action) => ({...state, ...action})

// we changed our state from a number to an object that has a number as a property. We plucked that property off.
// We updated our increment function. We called setState with an object with a property for the value that we want to have updated. 
function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
