import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { BiMoon } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { Routes, Route } from "react-router-dom"
import BarChart from "../pages/BarChart"
import PieChart from "../pages/PieChart";
import GeoChart from "../pages/GeoChart";
import LineChart from "../pages/LineChart";
import Team from "../pages/Team";
import Profile from "../pages/Profile";
import Invoices from "../pages/Invoices";
import Calendar from "../pages/Calendar";
import Contacts from "../pages/Contacts";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import tw from "tailwind-styled-components";
const Nav = tw.nav` flex justify-between items-center pb-2 text-white`
const Wrapper = tw.div`ms-[220px] max-[800px]:ms-0 min-h-screen p-2 bg-primary-600`
const NavFlexItems = tw.div`flex gap-2`
const NavButton = tw.button` text-lg `
type props = {
  // drawer:boolean,
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>
}
const Layout = ({ setDrawer }: props) => {
  const close = () => {
    setDrawer(true)
    setDrawer((prev) => {
      if (prev) {
        return prev
      }
      else {
        return true
      }
    })
  }
  return (
    <Wrapper>
      <Nav>
        <NavFlexItems><button onClick={close} className="text-xl  min-[800px]:hidden"><AiOutlineMenu /></button>
          <div className="w-[200px] relative text-mygreen-600 ">
            <input type="text" className="h-full w-full border border-black p-[2px] rounded" placeholder="Search..." />
            <span className="absolute right-2 top-1/2 -translate-y-1/2"><AiOutlineSearch /></span>
          </div></NavFlexItems>
        <NavFlexItems>
          <NavButton><BiMoon /></NavButton>
          <NavButton><FaBell /></NavButton>
          <NavButton><AiOutlineSetting /></NavButton>
          <NavButton><CgProfile /></NavButton>
        </NavFlexItems>
      </Nav>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bar-chart" element={<BarChart />} />
        <Route path="/pie-chart" element={<PieChart />} />
        <Route path="/geo-chart" element={<GeoChart />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/team" element={<Team />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/FAQ" element={<Faq />} />
      </Routes>
      {/* </BrowserRouter> */}
    </Wrapper>
  )
}

export default Layout