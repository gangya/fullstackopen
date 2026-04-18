import { Header } from './Header'
import { Content } from './Content'
import { TotalExercises } from './TotalExercises'

export const Course = ({course}) => {
    // console.log('Executing Course Component...');
    // console.log('What received as props', course):    
    return (
        <>
        <Header textHeader={course.name} />
        <Content courseparts={course.parts} /> 
        <TotalExercises courseparts={course.parts} />
        </>
    )  
}