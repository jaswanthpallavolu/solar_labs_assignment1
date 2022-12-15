import { dropDownOptions } from "../data"
import "./styles.css"
const DropDown = ({ value, setValue }) => {
  const handleOption = (e) => {
    setValue(e.target.value)
  }
  return (
    <select required name="months" value={value} onChange={handleOption}>
      <option value="0" hidden>
        choose months
      </option>
      {dropDownOptions.map((obj) => (
        <option key={obj.id} value={obj.name}>
          {obj.name}
        </option>
      ))}
    </select>
  )
}
export default DropDown
