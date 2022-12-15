import { useState } from "react"
import "./App.css"
import CheckBox from "./components/CheckBox"
import { years } from "./data"
import YearCard from "./components/YearCard"

function App() {
  const [checked, setChecked] = useState([])
  return (
    <div className="App">
      <header>
        {years.map((obj) => (
          <CheckBox setValue={setChecked} key={obj.id} info={obj} />
        ))}
      </header>

      <div className="cards_container">
        {years.map((obj) => (
          <div key={obj.id}>
            {checked.find((i) => i === obj.id) && <YearCard title={obj.year} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
