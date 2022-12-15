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
        {checked?.map((id) => (
          <div key={id}>
            <YearCard year={years.find((i) => i.id === id).year} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
