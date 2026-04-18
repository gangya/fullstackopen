export const FormFields = ({formSearchLabel, formSearchText, methodToCall}) => { return (
    <>
    <label htmlFor="findCountries">{formSearchLabel}    </label>
    <input type="text" name="" id="findCountries" value={formSearchText} onChange={methodToCall} />
    </> 
)
}

{/* <FormFields formSearchLabel="find countries" formSearchText={searchText} metohoToCall={searchTextHandle}></FormFields> */}