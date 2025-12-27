import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

const Display = (props) => {
  console.log('Display counter component...')
  return(
    <>
    <p>{props.counter}</p>
    </>    
  )
}

const Button = ({functionToCall, buttonText}) => {
  console.log('Button component calling the function...')
  return(
  <button type="button" onClick={functionToCall}>{buttonText}</button>
  )
}


export const LeftRightClicks = () => {
  const [clicks, setClicks] = useState({
    left:0,
    right:0
  })

  const handleleftClick = () => {
    const newClicks = {
      left:clicks.left + 1,
      right:clicks.right
    }
    setClicks(newClicks)
  }

  const handlerightClick = () => {
    const newClicks = {
      left:clicks.left,
      right:clicks.right + 1
    }
    setClicks(newClicks)
  }

  return(
    <>
    You have clicked left {clicks.left} times
    <Button functionToCall={handleleftClick} buttonText="Button for left click" ></Button>
    You have clicked right {clicks.right} times
    <Button functionToCall={handlerightClick} buttonText="Button for right click" />
    </>
  )


} 


export const App = () => {
  console.log('App Component is running..')
  const [counter, setCounter] = useState(0)
  // setTimeout( () => setCounter(counter + 1),1000)
  const increaseCounterbyOne = () => {
    console.log('Clicked on button to increase!...')
    setCounter(counter+1)
  }
 
  const setToZero = () => {
    console.log('Clicked on button to reset!...')
    setCounter(0)
  }

  const decreaseCounterbyOne= () => {
    console.log('Clicked on button to decrease!...')
    setCounter(counter-1)
  }

  // console.log('Counter value: ', counter)

  return (
    <>
    {/* <p>{counter}</p> */}
    <Display counter={counter} />
    {/* <button type="button" onClick={increaseCounterbyOne}>Increment Counter</button> */}    
    <Button functionToCall={increaseCounterbyOne} buttonText="Increment counter params"></Button>
    <button type="button" onClick={setToZero}>Reset Counter</button>
    <Button functionToCall={decreaseCounterbyOne} buttonText="decrease counter params" />
    </>
  )
}
export const CardApp = () => {
  console.log("Hello from component printing in console")
  return (
    <div className="card">
      <p>Hello world new 7</p>
    </div>
  )
}

export const MatOperation = () => {
  const dateNow = new Date()
  const a = 12
  const b = 8
  console.log( dateNow, a+b)
  return (
      <div className="card"> 
       <p>It is  {dateNow.toString()}</p>
       <p>{ a } plus {b} equals {a+b}</p>
      </div>
  )
} 




/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/
//export default App; MatOperation
