import { Course } from "./Course";

export const Courses = ({courses}) => {
    // console.log('Executing Courses component..', courses);
    return (
        <>
        {courses.map((course)=> <Course key={course.id} course={course} /> )}
        </>        
    )    
}