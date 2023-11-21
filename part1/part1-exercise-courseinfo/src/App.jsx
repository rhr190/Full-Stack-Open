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
      <Part name = {param.parts[0].name} exercises = {param.parts[0].exercises}/>
      <Part name = {param.parts[1].name} exercises = {param.parts[1].exercises}/>
      <Part name = {param.parts[2].name} exercises = {param.parts[2].exercises}/>
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
      <p> Number of exercises {param.parts[0].exercises+param.parts[1].exercises+param.parts[2].exercises}</p>
    </>
  )
}




function App() {
  const course = 'Half Stack Application Development'
  const parts = [
  {
    name : 'Fundamentals of React',
    exercises : 10
  },
  {
    name : 'Using props to pass data',
    exercises : 7
  },
  {
    name : 'State of a component',
    exercises : 14
  }
]

  return (
    <>
      <Header name={course}/>
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </>
  )
}

export default App
