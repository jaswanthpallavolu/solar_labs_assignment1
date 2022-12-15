import React from "react"
import "./styles.css"

export default function CheckBox({ setValue, info }) {
  const handleCheck = (e) => {
    if (e.target.checked) setValue((value) => [...value, info.id])
    else setValue((value) => value.filter((id) => id !== info.id))
  }
  return (
    <div className="checkbox">
      <input type="checkbox" onChange={handleCheck} />
      <label>{info.year}</label>
    </div>
  )
}
