export const Content = ({courseContents}) => courseContents.map( courseContent => 
<p key={courseContent.id}>{courseContent.name} {courseContent.exercises}</p> 
) 