import "./index.css"
import { Inicio } from "./components/Home"
import { Languages } from './components/Languages'
import { CustomNavbar } from "./components/Navbar"
import { Projects } from './components/Projects'
export default function App() {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <Inicio></Inicio>
      <Languages></Languages>
      <Projects></Projects>
    </div>
  )
}
