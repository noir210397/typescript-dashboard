import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import { useState, useEffect } from "react";


function App() {

  const [drawer, setDrawer] = useState<boolean>(false)
  useEffect(() => {
    if (drawer) {
      document.body.style.overflow = "hidden"
    }
    else {
      document.body.style.overflow = ""

    }
  }, [drawer])
  return (
    <div className="relative">
      <Sidebar drawer={drawer} setDrawer={setDrawer} />
      <Layout setDrawer={setDrawer} />
    </div>
  )
}

export default App
