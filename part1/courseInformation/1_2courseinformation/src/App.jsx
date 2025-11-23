const Header = (props) => <h1>{props.course}</h1>
const Part = (props) =>  <p>{props.chapterName} {props.exercisesNumber}</p>
const Content = () => {
  return(
    <>
    <Part chapterName='Fundamentals of React' exercisesNumber='10' />
    <Part chapterName='Using props to pass data' exercisesNumber='7' />
    <Part chapterName='State of a component' exercisesNumber='14' />
    </>
    )
}
const Total = (props) => <p>{props.resulText} {props.exercises}</p>

const App = () => {
  console.log("Hello from Component App - Exercise 1_2courseinformation")
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return(
    <>
    <Header course={course} />
    <Content />
    {/* <Content chapter={part1} exercises={exercises1} />
    <Content chapter={part2} exercises={exercises2} />
    <Content chapter={part3} exercises={exercises3} /> */}
    {/* <Total resulText="Number of exercises " exercises={exercises1 + exercises2 + exercises3} /> */}
    </>
  )
}

export default App