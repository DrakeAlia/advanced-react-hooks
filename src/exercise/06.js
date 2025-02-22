// useDebugValue: useMedia
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// The only time you would ever actually use this is if calculating that DebugValue is somehow expensive, 
// and you want to optimize that away
const formatCountDebugValue = ({query, state}) => `\`${query}\` => ${state}`

// If you ever have a computationally expensive value to use with your useDebugValue, 
// then you pass all of the things that you need for calculating that value as a first argument. 
// Then the second argument is a function that will accept those values 
// and return the DebugValue you want to be assigned.
function useMedia(query, initialState = false) {
  const [state, setState] = React.useState(initialState)
  React.useDebugValue({query, state}, formatCountDebugValue)

  React.useEffect(() => {
    let mounted = true
    const mql = window.matchMedia(query)
    function onChange() {
      if (!mounted) {
        return
      }
      setState(Boolean(mql.matches))
    }

    mql.addListener(onChange)
    setState(mql.matches)

    return () => {
      mounted = false
      mql.removeListener(onChange)
    }
  }, [query])

  return state
}

function Box() {
  const isBig = useMedia('(min-width: 1000px)')
  const isMedium = useMedia('(max-width: 999px) and (min-width: 700px)')
  const isSmall = useMedia('(max-width: 699px)')
  const color = isBig ? 'green' : isMedium ? 'yellow' : isSmall ? 'red' : null

  return <div style={{width: 200, height: 200, backgroundColor: color}} />
}

function App() {
  return <Box />
}

export default App
