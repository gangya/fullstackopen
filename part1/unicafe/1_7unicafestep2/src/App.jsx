import { useState } from 'react'

const Titles = ({textTitle}) => <h1>{textTitle}</h1> 
const Button = ({functionName, textButton})  => <button onClick={functionName}>{textButton}</button>


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState([])
  const [valueaverage, setValueaverage] = useState(0)
  const [percentpos, setpercentPos] = useState(0)

  const calculateAverage = (array) => {
    if(array.length === 0){
      setValueaverage(0)     
    }else{
      const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setValueaverage(sum/array.length);
      // debugger
      // console.log('sum ',sum, 'sum/array.length in calculateAverage ', sum/array.length)
    }
  }

  const calculateperPos = (array) => {
    if(array.length === 0){
      setpercentPos(0)
      // console.log('array.lenght === 0, in calculateperPos ', array.length ) 
    }else{
      const newGood = good;
      // console.log('newGood incalculateperPos ', newGood, 'array.lenght ', array.length ) 
      const newpercentPositive = ((newGood/array.length)*100)
      setpercentPos(newpercentPositive)
      // console.log('newpercentPositive', newpercentPositive, 'newGood ', newGood, 'array.lenght ', array.length )   
    }
  }
  
  const clickedNeutral = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral)
    const newAverage = average.concat(0)
    setAverage(newAverage)
    calculateAverage(newAverage)
    calculateperPos(newAverage)
  } 

  const clickedGood = () => {
    const newGood = good+1
    setGood(newGood)
    const newAverage = average.concat(1)
    setAverage(newAverage)
    // debugger
    // console.log('newGood in clickedGood ', newGood, 'good in clickedGood ', good)
    // debugger
    calculateAverage(newAverage)
    calculateperPos(newAverage)
  } 

  const clickedBad = () => {
    const newBad = bad+1
    setBad(newBad)
    const newAverage = average.concat(-1)
    setAverage(newAverage)
    calculateAverage(newAverage)
    calculateperPos(newAverage)
  }

  return (
    <>
    <Titles textTitle='give feedback'></Titles>
    <Button functionName={clickedGood} textButton='good'></Button>
    <Button functionName={clickedNeutral} textButton='neutral'></Button>
    <Button functionName={clickedBad} textButton='bad'></Button>
    <Titles textTitle='statistics'></Titles>
    good {good} <br />
    neutral {neutral} <br />
    bad {bad} <br />
    all {good+neutral+bad} <br />
    Average {valueaverage} <br />
    positive {percentpos} % <br />
    {/* Average Array {average} */}
    </>
  )
}

export default App
