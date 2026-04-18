import { Header } from "./Header";
import { Content } from "./Content";
import { TotalExercises } from "./TotalExercises";

export const Course = ({course}) => {
    console.log('Executing Course component', course );
    return (
        <>
        <Header textHeader={course.name}></Header>
        <Content courseParts={course.parts}></Content>
        <TotalExercises courseParts={course.parts}></TotalExercises>
        </>
    )
}