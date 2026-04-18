import { HeaderH1, HeaderH2 } from "./Headers";
import { Content } from "./Content";
import { TotalExercises } from "./TotalExercises";

export const Course = ({course}) => {
    // console.log('Executing Course component', course );
    return (
        <>
        <HeaderH2 textHeader={course.name}></HeaderH2>
        <Content courseParts={course.parts}></Content>
        <TotalExercises courseParts={course.parts}></TotalExercises>
        </>
    )
}