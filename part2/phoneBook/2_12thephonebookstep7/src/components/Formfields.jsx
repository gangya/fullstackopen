export const Formfields = ({methodToCallName, valueTextName, 
    methodToCallNumber, valueTextNumber, submitMethod}) => {
    return(
        <>
        <form>
            <div>
            name: <input onChange={methodToCallName} value={valueTextName} />
            </div>        
            <div>
            number: <input onChange={methodToCallNumber} value={valueTextNumber} />
            </div>        
            {/* <div>debug: {newName}</div> */}
            {/* <div>debug: {newNumber}</div> */}
            <div>
            <button type="submit" onClick={submitMethod} >add</button>
            </div>
        </form>        
        </>
    )
    }