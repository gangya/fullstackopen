const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.textHeader}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
    <p>{props.courseParts[0].name} {props.courseParts[0].exercises}</p>
    <p>{props.courseParts[1].name} {props.courseParts[1].exercises}</p>
    <p>{props.courseParts[2].name} {props.courseParts[2].exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <p>Total {props.courseParts[0].exercises + props.courseParts[1].exercises + props.courseParts[2].exercises }</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header textHeader={course} />
      <Content courseParts={parts} />
      <Total courseParts={parts}/>
    </>
  )
}

export default App
