import React from 'react'
import { useState, useCallback, memo } from 'react'

const CounterButton = memo(function ({ onClick }) {
  console.log('child rendered');
  return (
    <button onClick={onClick}>
      Click me
    </button>
  );
})


export default function App() {
  const [counter, setCounter] = useState(0)
  const [appUpdate, setAppUpdate] = useState(0)

  // useCallback prevent recreation of counterHandler 
  const counterHandler = useCallback(() => {
    setCounter(previousNumber => previousNumber + 1)
  }, [counter])

  // without useCallback everytime that parents get re-render child will also get re-rendered even though we used memo for child component
  // const counterHandler = () => {
  //   setCounter(previousNumber => previousNumber + 1)
  // }

  return (
    <div>
      <h2>Parent: {appUpdate}</h2>
      <h3>Counter: {counter}</h3>
      <br />
      <CounterButton onClick={counterHandler} />
      <hr />
      <button onClick={() => setAppUpdate(previousNumber => previousNumber + 1)}>Update Parent</button>
    </div>
  )
}
