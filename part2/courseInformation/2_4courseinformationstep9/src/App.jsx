import { Course } from "./components/Course"
import { HeaderH1 } from "./components/Headers";

function App() {  
 
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        },        {
          name: 'Test adding a chapter to the Node.js Course',
          exercises: 7,
          id: 3
        }
      ]
    }
  ]

  return (
    <>
    <HeaderH1 textHeader="Web development curriculum"></HeaderH1>
    {courses.map((course)=> <Course key={course.id} course={course}></Course>) }
    {/* <Course course={courses} */}
    </>
  )
}

export default App
