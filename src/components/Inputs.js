import React, { useState } from "react"
import "./styles.css"
export const InputGroup = ({ value, setValue, label }) => {
  return (
    <div className="igroup">
      <label>{label}</label>
      <input type="number" defaultValue={0} />
    </div>
  )
}
