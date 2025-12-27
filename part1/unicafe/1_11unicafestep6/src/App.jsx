import { useState } from 'react'

const Title = ({ titleText }) => <h1>{titleText}</h1>

const Statisticsline = ({ statisticsText, statisticsValue }) => <tr><td>{statisticsText}</td><td>{ statisticsValue}</td></tr>

const Button = ({ buttonCallfunction, textButton }) => <button onClick={buttonCallfunction}>{textButton}</button>

const Statistics = (props) => {
  if(props.arrayClicks.length === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
    <table>
      <tbody>
        <Statisticsline statisticsText="good" statisticsValue={props.goodValue}/>
        <Statisticsline statisticsText="neutral" statisticsValue={props.neutralValue}/>
        <Statisticsline statisticsText="bad" statisticsValue={props.badValue}/>
        <Statisticsline statisticsText="all" statisticsValue={props.goodValue+props.neutralValue+props.badValue}/>
        <Statisticsline statisticsText="average" statisticsValue={props.average}/>
        <Statisticsline statisticsText="positive" statisticsValue={(props.goodValue/props.arrayClicks.length)*100}/>
      </tbody>
    </table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const calculateAverage = (arraytoIterate) => {
    if(arraytoIterate.length===0){
      return 0
    }
    const sumValues = arraytoIterate.reduce((accumulator, currentValue) => accumulator+currentValue,0)
    return sumValues/arraytoIterate.length
  }

  const goodFeedback = () => {
    const newGood = good + 1
    let newAllClicks = allClicks
    setAllClicks(newAllClicks.concat(1))
    setGood(newGood)      
  }

  const neutralFeedback = () => {
    const newNeutral = neutral + 1
    let newAllClicks = allClicks
    setAllClicks(newAllClicks.concat(0))
    setNeutral(newNeutral)
  }

  const badFeedback = () => {
    const newBad = bad + 1
    let newAllClicks = allClicks
    setAllClicks(newAllClicks.concat(-1))
    setBad(newBad)       
  }

  return (
    <>
      <Title titleText="give feedbak" />
      <Button buttonCallfunction={goodFeedback} textButton="good" />
      <Button buttonCallfunction={neutralFeedback} textButton="neutral" />
      <Button buttonCallfunction={badFeedback} textButton="bad" /> 
      <Title titleText="statistics" />   
      <Statistics arrayClicks={allClicks} badValue={bad} neutralValue={neutral} goodValue={good} average={calculateAverage(allClicks)} />
    </>
  )
}

export default App
