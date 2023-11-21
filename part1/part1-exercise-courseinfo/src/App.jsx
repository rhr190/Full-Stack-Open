// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Header(param) {
  return (
    <>
      <h1>{param.name}</h1>
    </>
  )
}

function Content(param) {
  return (
    <>
      <Part name = {param.part1.name} exercises = {param.part1.exercises}/>
      <Part name = {param.part2.name} exercises = {param.part2.exercises}/>
      <Part name = {param.part3.name} exercises = {param.part3.exercises}/>
    </>
  )
}

// Exercise 1.1 doesn't contain the 'Part' component

function Part(param) {
  return (
    <>
      <p>
        {param.name} {param.exercises}
      </p>
    </>
  )
}

function Total(param) {
  return (
    <>
      <p> Number of exercises {param.part1.exercises+param.part2.exercises+param.part3.exercises}</p>
    </>
  )
}




function App() {
  const course = 'Half Stack Application Development'
  const part1 = {
    name : 'Fundamentals of React',
    exercises : 10
  }
  const part2 = {
    name : 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
    name : 'State of a component',
    exercises : 14
  }
  

  return (
    <>
      <Header name={course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3}/>
      <Total part1 = {part1} part2 = {part2} part3 = {part3} />
    </>
  )
}

export default App
