import React, { useState } from "react"
import "./styles.css"
import { dropDown } from "../data"
export default function YearCard({ title }) {
  const [option, setOption] = useState("0")
  return (
    <div className="ycard">
      <button className="reset">Reset</button>
      <h3>{title}</h3>
      <div className="dropd">
        <DropDown value={option} setValue={setOption} />
      </div>
      <button className="calc">calculate</button>
    </div>
  )
}

const DropDown = ({ value, setValue }) => {
  const handleOption = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  return (
    <select name="months" value={value} onChange={handleOption}>
      <option value="0" hidden>
        choose months
      </option>
      {dropDown.map((obj) => (
        <option key={obj.id} value={obj.name}>
          {obj.name}
        </option>
      ))}
    </select>
  )
}
