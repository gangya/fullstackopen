import { useState } from 'react'

const Titles =({textTitle}) => <h1>{textTitle}</h1>

const Button = ({buttonFunction, buttonText}) => <button onClick={buttonFunction}>{buttonText}</button>

const Statistics = ({goodCounter, neutralCounter, badCounter, total, average}) => { 
  const positive = goodCounter > 0 ? (goodCounter/total)*100 : 0
  return(
    <>
    <Titles textTitle='statistics'></Titles>
    good {goodCounter} <br />
    neutral {neutralCounter} <br />
    bad {badCounter} <br />
    all {total} <br />
    Average {average} <br />
    positive {positive} %
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks ] =  useState([])
  const [average, setAverage] = useState(0)

  const averageArray = (array) => {
    // console.log('in averageArray')
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const newAverage = sum/array.length
    // console.log('sum in averageArray', sum, 'sum in averageArray', newAverage)
    setAverage(newAverage)
  }

  const clickedGood = () => {
    // console.log('clicked Good...')
    const newGood = good + 1
    setGood(newGood)
    const newAllClicks = allClicks.concat(1);
    setAllClicks(newAllClicks)
    averageArray(newAllClicks)
    // console.log('clickedGood good', good, 'NewGood ', newGood )
  } 

  const clickedNeutral = () => {
    // console.log('clicked Neutral...')
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newAllClicks = allClicks.concat(0);
    setAllClicks(newAllClicks)
    averageArray(newAllClicks)
  }

  const clickedBad = () => {
    // console.log('clicked Bad...')
    const newBad = bad + 1
    setBad(newBad)
    const newAllClicks = allClicks.concat(-1);
    setAllClicks(newAllClicks)
    averageArray(newAllClicks) 
  }

  return (
    <>
     <Titles textTitle='give feedback'></Titles>
     <Button buttonFunction={clickedGood} buttonText='good'></Button>
     <Button buttonFunction={clickedNeutral} buttonText='neutral'></Button>
     <Button buttonFunction={clickedBad} buttonText='bad'></Button>
     <Statistics goodCounter={good} neutralCounter={neutral} badCounter={bad} total={good+neutral+bad} average={average}></Statistics>
    </>
  )
}

export default App