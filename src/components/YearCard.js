import React, { useEffect, useState } from "react"
import "./styles.css"
import { dropDownOptions, monthsData } from "../data"
import { InputGroup } from "./Inputs"
export default function YearCard({ title }) {
  const [months, setMonths] = useState()
  const [option, setOption] = useState("0")
  const [month1, setMonth1] = useState()
  const [month2, setMonth2] = useState()
  const [month3, setMonth3] = useState()
  const [month4, setMonth4] = useState()
  useEffect(() => {
    setMonth1(0)
    setMonth2(0)
    setMonth3(0)
    setMonth4(0)

    const filtered = dropDownOptions.find((i) => i.name === option)
    const id = filtered?.id ? filtered.id : 0
    setMonths(monthsData.find((obj) => obj.id === id))
  }, [option])

  return (
    <div className="ycard">
      <div className="place-right">
        <button className="reset">Reset</button>
      </div>
      <h1>{title}</h1>
      <div className="dropd">
        <DropDown value={option} setValue={setOption} />
        {months?.labels?.map((month, index) => (
          <InputGroup key={index} label={month} />
        ))}
      </div>

      {months?.labels && (
        <div className="place-right">
          <button className="calc">calculate</button>
        </div>
      )}
    </div>
  )
}

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
