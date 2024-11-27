import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticsLine = ({text,value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({good, neutral ,bad}) => {
  let total = good + neutral + bad
  console.log(total)
  if (total == 0){
    return(<p>No feedback given</p>)
  }
  return(
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="average" value={(good * 1 + bad * -1) / total} />
          <StatisticsLine text="positive" value={(good / total * 100) + ' %'} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {() => setGood(good + 1)} text = 'good'></Button>
      <Button handleClick = {() => setNeutral(neutral + 1)} text = 'neutral'></Button>
      <Button handleClick = {() => setBad(bad + 1)} text = 'bad'></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App