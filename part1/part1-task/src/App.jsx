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

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}




function App(props) {
  // const {counter} = props
  // const name = 'Peter'
  // const age = 69
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)
  // setTimeout( 
  //   () => setCounter(counter + 1), 
  //   1000
  // )

  //console.log("rendering..", counter)
  
  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const reset = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const handleClick = () => {
    console.log('clicked')
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
      <Display counter = {counter}/>
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
      />

    </>
  )
}

export default App
