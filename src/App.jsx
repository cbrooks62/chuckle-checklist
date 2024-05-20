import "./App.css"
import { useState } from "react"

export const App = () => {
  const [newJoke, setNewJoke] = useState()

  return (
    <input
  className="joke-input"
  type="text"
  placeholder="New One Liner"
  onChange={(event) => {
    // What's the value of event?
    setNewJoke(event.target.value);
    console.log(event.target.value);
  }}
  />
  )
}
