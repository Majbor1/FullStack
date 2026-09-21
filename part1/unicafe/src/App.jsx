import { useState } from 'react'

const Display = (props) => <h1>{props.text}</h1>
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const Stats = (props) => <p>{props.text} {props.name}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    console.log('good clicked')
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    console.log('neutral clicked')
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }

  const handleBadClick = () => {
    console.log('bad clicked')
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }
  
  const average = () => (good - bad)/total
  const positive = () => {
    const positive = (good/total)*100
    return (positive + '%')
  }

  return (
    <div>
      <Display text='give feedback' />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Display text='statistics' />
      <Stats text='good' name={good} />
      <Stats text='neutral' name={neutral} />
      <Stats text='bad' name={bad} />
      <Stats text='all' name={total} />
      <Stats text='average' name={average()} />
      <Stats text='positive' name={positive()} />
    </div>
  )
}

export default App