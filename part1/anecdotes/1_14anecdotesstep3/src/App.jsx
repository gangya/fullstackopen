import { useState } from 'react'

const Titles = (props) => <h1>{props.textTitles}</h1>
const Button = (props) => <button type="button" onClick={props.functiontoCall} >{props.textButton}</button>
const ShowMostVoted = (props) => {
  if(props.currentMostVoted === 0 && props.arrayVotes[props.currentMostVoted] === 0){
    return ( <></> )
  }
return (
    <>
    {props.anecdotesArray[props.currentMostVoted]}
    <br />
    has {props.arrayVotes[props.currentMostVoted]} votes    
    </>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // const arrayVotes =  Object.fromEntries(anecdotes.map((value, index) => [index,0]))
  const arrayVotes =  anecdotes.map(() => 0)
  const [selected, setSelected] = useState(0)
  const [arrayvotes, setArrayVotes] = useState(arrayVotes)
  const [mostvoted, setMostVoted] = useState(0)

  // console.log('arrayvotes ', arrayvotes)

  const calculateMostVoted = (arrayNumbers) => {
    // console.log('in calculateMostVoted')
    const currentMostVoted = mostvoted
    const newMostVoted = (arrayNumbers[selected] > arrayNumbers[currentMostVoted])? selected: currentMostVoted
    // console.log('currentMostVoted ', currentMostVoted, ' and selected ',  selected,  ' and newMostVoted ', newMostVoted )
    setMostVoted(newMostVoted)
  }

  const updateVote = () => {
    // console.log('in updateVote')
    const newArrayVotes = [...arrayvotes]
    newArrayVotes[selected]+=1
    setArrayVotes(newArrayVotes)
    calculateMostVoted(newArrayVotes)
  }
  
  const nextAnecdote = () => {
    // console.log('in nextAnecdote')
    const newSelected = Math.floor(Math.random()*anecdotes.length)
    setSelected(newSelected)
  }  

  return (
    <>
    <Titles textTitles="Anecdote of the day"></Titles>
    {anecdotes[selected]} <br />
    has {arrayvotes[selected]} votes
    <br />
    <Button textButton="vote" functiontoCall={updateVote} ></Button>
    <Button textButton="next anecdote" functiontoCall={nextAnecdote}></Button>
    <br />
    <Titles textTitles="Anecdote with most votes"></Titles>  
{/*     {anecdotes[mostvoted]}
    <br />
    has {arrayvotes[mostvoted]} votes
    <Titles textTitles="Anecdote with most votes 2"></Titles> */}
    <ShowMostVoted currentMostVoted={mostvoted} arrayVotes={arrayvotes} anecdotesArray={anecdotes}></ShowMostVoted>
    </>
  )
}

export default App
