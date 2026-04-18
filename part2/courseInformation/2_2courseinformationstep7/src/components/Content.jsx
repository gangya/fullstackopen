export const Content = ({courseparts}) => {
    // console.log('executing Content...', courseparts); 
    return ( courseparts.map((coursepart) => 
    <p key = {coursepart.id}>{coursepart.name} {coursepart.exercises}</p>) 
    )
} 
