const Header = (props) => {
  console.log(props);
  return(
    <h1>{props.text}</h1>
  )  
}
const Content = (props) => {
  console.log(props);
  return(
    <p>{props.text} {props.exercises}</p>
  )  
}

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <>
      <Header text={course} />
      <Content text={part1.name} exercises={part1.exercises} />
      <Content text={part2.name} exercises={part2.exercises} />
      <Content text={part3.name} exercises={part3.exercises} />
    </>
  )
}

export default App
