import { CgClose } from "react-icons/cg";
import { FcGlobe } from "react-icons/fc";
import { BiLineChart } from "react-icons/bi";
import { FaChartPie } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { BiCalendarAlt } from "react-icons/bi";
import { BsPersonFillGear } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { AiOutlineContacts } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import LinkCard from "../LinkCard";
import tw from "tailwind-styled-components";
import { useState } from "react";
type Wrapper = {
    value: boolean
}
type props = {
    drawer: boolean,
    setDrawer: React.Dispatch<React.SetStateAction<boolean>>
}
const Wrapper = tw.div<Wrapper>`w-[220px] pt-2 z-50 transition-transform bg-primary-500 text-white  shadow-lg fixed inset-y-0 start-0  px-3 overflow-y--auto ${(p) => p.value ? "max-[800px]:translate-x-0" : "max-[800px]:-translate-x-full"}`
// const Container=tw.div``
const LinkWrapper = tw.div`mx-auto`
const Title = tw.h1``
const data = [
    {
        icon: <RiTeamLine />,
        desc: "manage team",
        link: "team"
    },
    {
        icon: <AiOutlineContacts />,
        desc: "contacts information",
        link: "contacts"
    },
    {
        icon: <FaFileInvoiceDollar />,
        desc: "invoice balances",
        link: "invoices"
    },

]
const pages = [
    {
        icon: <BsPersonFillGear />,
        desc: "profile form",
        link: "profile"
    },
    {
        icon: <BiCalendarAlt />,
        desc: "calendar",
        link: "calendar"
    },
    {
        icon: <FaQuestionCircle />,
        desc: "FAQ",
        link: "FAQ"
    },

]
const charts = [
    {
        icon: <BsFillBarChartFill />,
        desc: "bar chart",
        link: "bar-chart"
    },
    {
        icon: <FaChartPie />,
        desc: "pie chart",
        link: "pie-chart"
    },
    {
        icon: <BiLineChart />,
        desc: "line chart",
        link: "line-chart"
    },
    {
        icon: <FcGlobe />,
        desc: "Geography chart",
        link: "geo-chart"
    },


]

const Sidebar = ({ drawer, setDrawer }: props) => {
    const [state, setState] = useState("/")
    const imagelink = `https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
    const close = () => {

        setDrawer((prev) => {
            if (prev) {
                return false
            }
            else {
                return prev
            }
        })
    }
    return (
        <Wrapper value={drawer}  >
            <div className="flex justify-between items-center">
                <div className="text-lg  font-extrabold uppercase cursor-pointer">admin</div>
                <button onClick={close} className="text-xl  "><span className="max-[800px]:hidden"><AiOutlineMenu /></span><span className="min-[800px]:hidden"><CgClose /></span></button>

            </div>
            <div className=" flex flex-col gap-2 items-center py-2">
                <img src={imagelink} alt="photo" className="w-12 aspect-square cursor-pointer border border-black rounded-full overflow-hidden object-cover" />
                <div className="text-lg  font-bold cursor-pointer">Ed Roh</div>
                <div className="capitalize cursor-pointer text-mygreen-500">vp admin</div>
            </div>
            <LinkWrapper >
                <div className="px-2" onClick={close}><LinkCard icon={<AiFillHome />} desc="dashboard" link="/" state={state} setState={setState} /></div>
            </LinkWrapper>
            <LinkWrapper >
                <Title>Data</Title>
                <div className="p-2" onClick={close}>{
                    data.map((item) => <LinkCard key={item.desc} {...item} state={state} setState={setState} />)
                }</div>
            </LinkWrapper>
            <LinkWrapper >
                <Title>Pages</Title>
                <div className="p-2" onClick={close}>{
                    pages.map((item) => <LinkCard key={item.desc} {...item} state={state} setState={setState} />)
                }</div>
            </LinkWrapper>
            <LinkWrapper >
                <Title>Charts</Title>
                <div className="p-2" onClick={close}>{
                    charts.map((item) => <LinkCard key={item.desc} {...item} state={state} setState={setState} />)
                }</div>
            </LinkWrapper>
        </Wrapper>
    )
}

export default Sidebar