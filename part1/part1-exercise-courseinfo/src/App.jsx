// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Header(param) {
  //console.log(param.name.name)
  return (
    <>
      <h1>{param.name.name}</h1>
    </>
  )
}

function Content(param) {
  //console.log(param.parts.parts)
  return (
    <>
      <Part name = {param.parts.parts[0].name} exercises = {param.parts.parts[0].exercises}/>
      <Part name = {param.parts.parts[1].name} exercises = {param.parts.parts[1].exercises}/>
      <Part name = {param.parts.parts[2].name} exercises = {param.parts.parts[2].exercises}/>
    </>
  )
}

// Exercise 1.1 doesn't contain the 'Part' component

function Part(param) {
  //console.log(param)
  return (
    <>
      <p>
        {param.name} {param.exercises}
      </p>
    </>
  )
}

function Total(param) {
  //console.log(param)
  return (
    <>
      <p> Number of exercises {param.parts.parts[0].exercises+param.parts.parts[1].exercises+param.parts.parts[2].exercises}</p>
    </>
  )
}




function App() {
  const course = {
    name : 'Half Stack Application Development',
    parts : [
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
  }


  return (
    <>
      <Header name={course}/>
      <Content parts = {course}/>
      <Total parts = {course} />
    </>
  )
}

export default App