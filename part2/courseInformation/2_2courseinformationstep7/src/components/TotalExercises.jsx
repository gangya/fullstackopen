export const TotalExercises = ({courseparts}) => {
    console.log('Executing TotalExecises', courseparts);
    let total = 0;
    courseparts.forEach(element => { total += element.exercises 
    });
    return (
        <p style={{ fontWeight: 'bold' }}>total of {total} exercises</p>
    )
}