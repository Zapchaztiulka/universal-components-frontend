import { Outlet } from "react-router-dom"
import { Navigation } from "./Navigation"


function App() {
  return (
    <>
      Universal components
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
