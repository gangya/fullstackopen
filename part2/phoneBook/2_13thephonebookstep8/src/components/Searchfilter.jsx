export const SearchFilter = ({methodToCall, valueText}) => <div>
  filter shown with: <input onChange={methodToCall} value={valueText} />
  </div>