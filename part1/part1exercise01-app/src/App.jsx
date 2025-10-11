import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
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
