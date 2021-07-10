// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider value={value} {...props} />
}

// Now we want to validate that the context value exists. Otherwise, we'll throw a useful error message, 
// so people know what they need to do to fix the problem.
function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error(`useCount must be rused within the CountProvider`)
  }
  return context
}

// Before, this was React useContext, and we passed this countContext here.
function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
