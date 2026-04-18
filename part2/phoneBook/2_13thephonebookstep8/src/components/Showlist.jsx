export const Showlist = ({personsArray}) => 
    personsArray.map((person) => <p key={person.id}>{person.name} {person.number}</p>
)