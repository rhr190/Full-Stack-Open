import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

const Hello = ({name, age}) => {
  //const a = props.a
  //const b = props.b
  // const {name, age} = props
  // console.log(props)

  // function bornYear (){
  //   const yearNow= new Date().getFullYear()
  //   return yearNow - age
  // }

  const bornYear = () => Number(new Date().getFullYear()) - age
  return (
    <>
      {/* <div>
        <p>Hello World, it is {now.toDateString()}</p>
        <p>{props.a} plus {props.b} is {props.a+props.b}</p>
        <p>{props.a+1} plus {props.b+1} is {props.a+props.b+2}</p>
      </div> */}
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>You were probably born in {bornYear()}</p>
    </>
  )
}

// Destructuring of props example
const Display = ({counter}) => {
  return (
    <div>
      {counter}
    </div>
  )
}


const History = (props) => {
  if (props.allClicks.includes('NULL')){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history : {props.allClicks.join(' ')}
    </div>
  )
}

/*
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
*/


function App(props) {
  /*
  const [counter, setCounter] = useState(0)
  setTimeout( 
    () => setCounter(counter + 1), 
    1000
  )

  console.log("rendering..", counter)
  const[left, setLeft] = useState(0)
  const[right, setRight] = useState(0)
  
  const increaseByOne = () => {
    setCounter(counter + 1)
  }

  const reset = () => {
    setCounter(0)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
  }

  const handleClick = () => {
    console.log('clicked')
  }
  */
  
  /*
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () =>{
    // setClicks can get the direct object declaraltion without creating a new object
    const newClicks = {
      ...clicks,
      left : clicks.left + 1,
      
    }
    setClicks(newClicks)
  }

  const handleRightClick = () =>{
    // setClicks can get the direct object declaraltion without creating a new object
    const newClicks = {
      ...clicks,
      right : clicks.right + 1
    }
    setClicks(newClicks)
  }
  */

/*
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState(['NULL'])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    if(allClicks.includes('NULL')){
      setAll(allClicks.pop()) // use with caution, mutating the properties may bring forth unexpected result
    }
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)  
  }
  const handleRightClick = () => {
    if(allClicks.includes('NULL')){
      setAll(allClicks.pop()) // use with caution, mutating the properties may bring forth unexpected result
    }
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)  
  }
  */

  const[value, setValue] = useState(10)

  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }
  return (
    <>
      {/* next third line uses variables/js expressions -> custom Edit
       next fourth line uses hardcoded values -> custom Edit */}
      {/* <Hello a={a} b={b}/>
      <Hello a={2} b={4}/> */}
      {/* <h1>Greetings</h1>
      <Hello name="Maya" age={42 + 10}/>
      <Hello name={name} age={age} /> */}
      {/* <Display counter = {counter}/>
      <Button 
      onClick={increaseByOne}
      text='Click me to increase!'
      />
      <Button
      onClick={reset}
      text='Click me to reset'
      />
      <Button
      onClick={decreaseByOne}
      text='Click me to decrease'
      /> */}
      {/* <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks = {allClicks} />
      </div> */}

      <div>
        {value}
        <button onClick={handleClick}>reset to zero</button>
      </div>
    </>
  )
}

export default App
