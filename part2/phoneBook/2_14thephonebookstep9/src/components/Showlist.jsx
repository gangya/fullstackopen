export const Showlist = ({personsArray, methodToCallList}) => 
    personsArray.map((person) => <Person key={person.id} personId={person.id} persoName={person.name} persoNumber={person.number} methodToCall={methodToCallList}  />
)

export const Person = ({personId, persoName, persoNumber, methodToCall}) =>  <p>
    {persoName} {persoNumber}    <button onClick={() => methodToCall(personId, persoName) } >delete</button>
</p>