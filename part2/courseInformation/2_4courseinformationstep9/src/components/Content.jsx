export const Content = ({courseParts}) => {
    // console.log('Executing Content component', courseParts);
    return (
        courseParts.map((coursePart) => 
        <p key={coursePart.id}>{coursePart.name} {coursePart.exercises}</p> )
    )
}