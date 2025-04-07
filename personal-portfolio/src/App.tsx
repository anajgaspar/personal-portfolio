import "./index.css"
import { Inicio } from "./components/Home"
import { Languages } from './components/Languages'
import { CustomNavbar } from "./components/Navbar"
import { Projeto } from "./components/Projects"
import { Footer } from "./components/Footer"
import './i18n'

export default function App() {
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <Inicio></Inicio>
      <Languages></Languages>
      <Projeto></Projeto>
      <Footer></Footer>
    </div>
  )
}
