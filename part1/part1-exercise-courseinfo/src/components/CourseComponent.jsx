function Header(param) {
    //console.log(param.name.name)
    return (
      <>
        <h1>{param.course.name}</h1>
      </>
    )
  }
  export {Header}

  function Part(param) {
    //console.log(param)
    return (
      <>
        <p>{param.name} {param.exercises}</p>
      </>
    )
  }
  export {Part}
  
  function Total(param) {
    //console.log(param)
    const course = param.course
    return (
      <>
        <p> <b> Number of exercises {course.parts.reduce((sum, currentVal) => sum + currentVal.exercises, 0)}</b> </p>
      </>
    )
  }
  export {Total}
  
  function Content(param) {
    //console.log(param.parts.parts)
    const course = param.course
    return (
      <>
        {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
      </>
    )
  }
  export {Content}
  
  function Course (props) {
    return (
      <>
        <Header course = {props.course}/>
        <Content course = {props.course}/>
        <Total course = {props.course} />
      </>
    )
  }
  export {Course}
  
  function Courses (props) {
    const courseList = props.courses
    return (
      <>
        {courseList.map(course => <Course key={course.id} course={course}/>)}
      </>
    )
  }
  export default Courses