import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}



const Stats = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = () => (props.good - props.bad)/total
  const positive = () => {
    const positive = (props.good/total)*100
    return (positive + '%')
  }
  
  if (total==0){
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  else{
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text='good' value={props.good} />
            <StatisticLine text='neutral' value={props.neutral} />
            <StatisticLine text='bad' value={props.bad} />
            <StatisticLine text='all' value={total} />
            <StatisticLine text='average' value={average()} />
            <StatisticLine text='positive' value={positive()} />
          </tbody>
        </table>
      </div>
    )
  }
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
  }

  const handleNeutralClick = () => {
    console.log('neutral clicked')
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    console.log('bad clicked')
    const updatedBad = bad + 1
    setBad(updatedBad)
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