import { useState } from 'react'

const Headers = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Buttons = ({text, onClick}) => {
  return (
      <button onClick={onClick}>{text}</button>
  )
}

const Counts = ({text, count, extra_text}) => {
  return (
    <p>{text} {count} {extra_text}</p>
  )
}

const Statistics = (props) => {
  //Stats text
  const pos = "Good"
  const neut = "Neutral"
  const neg = "Bad"
  const total = "All"
  const avg = "Average"
  const posPer = "Positive"
  const percentSymbol = "%"

  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <Counts text={pos} count={props.good} />
      <Counts text={neut} count={props.neutral} />
      <Counts text={neg} count={props.bad} />
      <Counts text={total} count={props.all} />
      <Counts text={avg} count={props.average} />
      <Counts text={posPer} count={props.posPercent} extra_text={percentSymbol}/>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [average, setAverage] = useState(0)
  const [posPercent, setPosPercent] = useState(0)
  

  // Event handlers
  const handlePos = () => {
    const goodCount = good + 1
    const allCount = all + 1
    const totalScore = score + 1
    setGood(goodCount)
    setAll(allCount)
    setScore(totalScore)
    setAverage(totalScore / allCount)
    setPosPercent(goodCount / allCount * 100)
  }
  const handleNeut = () => {
    const neutCount = neutral + 1
    const allCount = all + 1
    const totalScore = score
    const goodCount = good 
    setAll(allCount)
    setNeutral(neutCount)
    setScore(totalScore)
    setAverage(totalScore / allCount)
    setPosPercent(goodCount / allCount * 100)
  }
  const handleNeg = () => {
    const badCount = bad + 1
    const allCount = all + 1
    const totalScore = score - 1
    const goodCount = good 
    setAll(allCount)
    setBad(badCount)
    setScore(totalScore)
    setAverage(totalScore / allCount)
    setPosPercent(goodCount / allCount * 100)
  }

  // header text
  const feedback = "Give Feedback"
  const stats = "Statistics"

  // stats text
  const pos = "Good"
  const neut = "Neutral"
  const neg = "Bad"

  return (
    <div>
      <Headers text={feedback}/>
      <Buttons onClick={handlePos} text={pos} />
      <Buttons onClick={handleNeut} text={neut} />
      <Buttons onClick={handleNeg} text={neg} />
      <Headers text={stats}/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} posPercent={posPercent}/>
    </div>
  )
}

export default App

// <Headers text={stats}/>
// <Counts text={pos} count={good} />
// <Counts text={neut} count={neutral} />
// <Counts text={neg} count={bad} />
// <Counts text={total} count={all} />
// <Counts text={avg} count={average} />
// <Counts text={posPer} count={posPercent} extra_text={percentSymbol}/>