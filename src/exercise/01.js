// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// Because our count reducer will receive the current value of the count, 
// we're able to combine that current value of the count with the step that was passed. 
// That's going to get us our new state.
function countReducer(count, step) {
  return count + step
}
// we updated this dispatch function from setCount to changeCount
// Then when we call it, we specify how much we want to change the count by
function Counter({initialCount = 0, step = 1}) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount)
  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
