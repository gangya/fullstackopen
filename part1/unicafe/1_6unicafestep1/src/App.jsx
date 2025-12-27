import { useState } from 'react'

const Titles = ({text}) => <h1>{text}</h1> 

const Button = ({functionToCall, textButton}) => <button onClick={functionToCall}>{textButton}</button>

const DisplayClick = ({textParagraph, clickedTimes}) => <p>{textParagraph} {clickedTimes}</p>

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickedGood = () => {
    // console.log('Clicked good...', good)
    const newClickedGood = good+1
    setGood(newClickedGood)
  }

  return (
    <>
    <Titles text='give feedback'></Titles>
    <Button functionToCall={clickedGood} textButton='good'></Button>
    <Button functionToCall={() => setNeutral(neutral+1) } textButton='neutral'></Button>
    <Button functionToCall={() => setBad(bad+1) } textButton='bad'></Button>
    <Titles text='statistics'></Titles>
    good {good}  <br />
    neutral {neutral} <br />
    bad {bad}
{/*     <DisplayClick textParagraph='good' clickedTimes={good}></DisplayClick>
    <DisplayClick textParagraph='neutral' clickedTimes={neutral}></DisplayClick>
    <DisplayClick textParagraph='bad' clickedTimes={bad}></DisplayClick> */}
    </>
  )
}

export default App
