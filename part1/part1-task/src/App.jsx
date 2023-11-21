import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Hello (props){
  const now = new Date()
  //const a = props.a
  //const b = props.b
  console.log(props)
  return (
    <>
      <div>
        <p>Hello World, it is {now.toDateString()}</p>
        <p>{props.a} plus {props.b} is {props.a+props.b}</p>
        <p>{props.a+1} plus {props.b+1} is {props.a+props.b+2}</p>
      </div>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)
  //const a = 99
  //const b = 69
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* line 48 uses variables/js expressions -> custom Edit
       line 49 uses hardcoded values -> custom Edit */}
      {/* <Hello a={a} b={b}/> 
      <Hello a={2} b={4}/> */}

    </>
  )
}

export default App
