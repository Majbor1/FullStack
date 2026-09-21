import { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <p>{props.anecdotes}</p>
      <p>has {props.value} votes</p>
    </div>
  )
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
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
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVoted, setMostVoted] = useState(0)
  const copy = [...votes]
  
  const findMostVoted = () => {
    const maxValue = Math.max(...copy)
    console.log('index:' + copy.indexOf(maxValue) + ' max value ' + maxValue)
    return copy.indexOf(maxValue)
  }

  const handleSelectedClick = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const handleVoteClick = () => {
    console.log(copy)
    copy[selected] += 1
    setVotes(copy)
    setMostVoted(findMostVoted())
  }


  return (
    <div>
      <Display anecdotes={anecdotes[selected]} text='Anecdote of the day' value={copy[selected]} />
      <Button onClick={handleVoteClick} text='vote' />
      <Button onClick={handleSelectedClick} text='next anecdote' />
      <Display anecdotes={anecdotes[mostVoted]} text='Anecdote with most votes' value={copy[mostVoted]} />
    </div>
  )
}

export default App