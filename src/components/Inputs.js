import React, { useState } from "react"
import "./styles.css"
export const InputGroup = ({
  index,
  entered,
  setEntered,
  value,
  setValue,
  label,
}) => {
  const handleInput = (e) => {
    setValue(e.target.value)
    setEntered({ value: e.target.value, index })
  }
  return (
    <div className="igroup">
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleInput}
        disabled={entered?.index ? index !== entered.index : false}
        required={true}
      />
    </div>
  )
}
