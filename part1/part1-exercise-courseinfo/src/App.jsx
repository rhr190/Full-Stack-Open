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
      <Part part = {param.part1} exercises = {param.exercises1}/>
      <Part part = {param.part2} exercises = {param.exercises2}/>
      <Part part = {param.part3} exercises = {param.exercises3}/>
    </>
  )
}

// Exercise 1.1 doesn't contain the 'Part' component

function Part(param) {
  return (
    <>
      <p>
        {param.part} {param.exercises}
      </p>
    </>
  )
}

function Total(param) {
  return (
    <>
      <p> Number of exercises {param.exercises1+param.exercises2+param.exercises3}</p>
    </>
  )
}




function App() {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header name={course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </>
  )
}

export default App
