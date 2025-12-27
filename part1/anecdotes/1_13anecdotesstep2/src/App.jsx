import { useState } from 'react'

const Button = (props) => <button onClick={props.functionToCall}>{props.textButton}</button>

function App() {
  const [selected, setSelected] = useState(0)
  // const [votesarray, setVotesArray] = useState([])
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
  const votesArray = Object.fromEntries(anecdotes.map((value, index) => [index, 0]));
  const votesArraySimple = anecdotes.map(()=>0)
  // console.log('Simple votes array ', votesArraySimple )
  // console.log('votesArray mapping', anecdotes.map((value, index) => [index, 0]))
  const [votesarray, setVotesArray] = useState(votesArray)
  const [votesarraysimple, setVotesArraySimple] = useState(votesArraySimple)
  // console.log('votesArray ', votesarray)
  // console.log('votesArraySimple ', votesarraysimple)
  // const votesArray = anecdotes.map((item, value) => {value, 0})
  // Object.fromEntries([1, 3, 4, 2].map((vote, index) => [index, vote]));

  const updateAnecdote = () => {
    let newSelected = Math.floor(Math.random()*anecdotes.length)
    // console.log('In updateAnecdote ', newSelected, ' votesArray ', votesArray)
    setSelected(newSelected)
  }

  const updateVote = () => {
    const newvotesArray = {...votesarray}
    const newvotesArraySimple = [...votesarraysimple]
    newvotesArraySimple[selected]+=1
    newvotesArray[selected]+=1 
    // console.log('In updateVote')
    setVotesArray(newvotesArray)
    setVotesArraySimple(newvotesArraySimple)
  }
  
  return (
    <>
    {/* {votesarray} <br /> */}
    {anecdotes[selected]} <br />
    has {votesarray[selected]} votes <br />
    <Button textButton="vote" functionToCall={updateVote}></Button>
    <Button textButton="next anecdote" functionToCall={updateAnecdote}></Button>
    </>
  )
}

export default App
