import React, { useEffect, useState } from "react"
import "./styles.css"
import { dropDownOptions, monthsData } from "../data"
import { InputGroup } from "./Inputs"

export default function YearCard({ title }) {
  const [option, setOption] = useState("0")
  const [months, setMonths] = useState()
  const [month1, setMonth1] = useState()
  const [month2, setMonth2] = useState()
  const [month3, setMonth3] = useState()
  const [month4, setMonth4] = useState()
  const [entered, setEntered] = useState()
  const inputStates = [
    [month1, setMonth1],
    [month2, setMonth2],
    [month3, setMonth3],
    [month4, setMonth4],
  ]
  const handleReset = () => {
    setMonth1(0)
    setMonth2(0)
    setMonth3(0)
    setMonth4(0)
    setEntered({})
  }
  const handleCalculate = (e) => {
    e.preventDefault()
    // if all are zeroes
    if (!entered?.value) {
      alert("all the Input values should not be Zero")
      setEntered({ value: 0, index: getRandomInt(0, 3) })
      return
    }
  }
  useEffect(() => {
    handleReset()

    const filtered = dropDownOptions.find((i) => i.name === option)
    const id = filtered?.id ? filtered.id : 0
    setMonths(monthsData.find((obj) => obj.id === id))
  }, [option])

  return (
    <div className="ycard">
      <div className="place-right">
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
      <h1>{title}</h1>
      <form onSubmit={handleCalculate}>
        <div className="dropd">
          <DropDown value={option} setValue={setOption} />
          {months?.labels?.map((month, index) => (
            <InputGroup
              key={index}
              index={index}
              entered={entered}
              setEntered={setEntered}
              label={month}
              value={inputStates[index][0]}
              setValue={inputStates[index][1]}
            />
          ))}
        </div>

        <div className="place-right">
          <button className="calc" disabled={!months?.labels}>
            calculate
          </button>
        </div>
      </form>
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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
