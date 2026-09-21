import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Stats = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = () => (props.good - props.bad)/total
  const positive = () => {
    const positive = (props.good/total)*100
    return (positive + '%')
  }
  
  return (
    <div>
      <h1>statistics</h1>
      <p>
        good {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad} <br />
        all {props.total} <br />
        average {average()} <br />
        positive {positive()} <br />
      </p>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

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
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Stats good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App