export const TotalExercises = ({courseParts}) => {
    // console.log('Executing TotaExercises component', courseParts);
    /* let total = 0;
    courseParts.map((coursePart)=> total += coursePart.exercises) */
    const total = courseParts.reduce((accumulator,currentValue)=> accumulator+=currentValue.exercises,0)
    return (
        <p style={{fontWeight:'bold'}}>total of {total} exercises</p>
    )
}