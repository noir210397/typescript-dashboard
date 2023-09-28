import { FaTrafficLight } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineTable } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import tw from "tailwind-styled-components"
import Card from "../components/Card";
import HomeLinechart from "../components/HomeLinechart";
import Transactions from "../components/Transactions";
import HomeCharts from "../components/HomeCharts";

const cardData = [
  {
    icon: <AiFillMail />,
    total: "12,361",
    value: 22,
    text: "Emails sent",
    increase: 14
  },
  {
    icon: <AiOutlineTable />,
    total: "431,225",
    value: 42,
    text: "Sales obtained",
    increase: 21
  },
  {
    icon: <BsFillPersonPlusFill />,
    total: "42,361",
    value: 69,
    text: "New clients",
    increase: 5
  },
  {
    icon: <FaTrafficLight />,
    total: "1,142,361",
    value: 69,
    text: "Traffic received",
    increase: 43
  },
]
const Container = tw.div`px-1 `
const ChartsWrapper = tw.div` flex gap-3 py-2 flex-wrap`
const Home = () => {
  return (
    <div className="text-white py-2 px-2">
      <Container>
        <div className="py-1 font-bold text-lg uppercase">dashboard</div>
        <div className="flex justify-between items-center text-xs md:text-sm gap-1 ">
          <div className=" capitalize text-mygreen-500">welcome to your dashboard</div>
          <button className="flex justify-center items-center bg-myblue-700 p-1 md:p-2 text-xs uppercase rounded"><FaDownload /><span className="ms-1">download reports</span></button>
        </div>
        <div className="gap-3 py-2" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}>
          {cardData.map((item) => <Card key={item.text} {...item} />)}

        </div>
        <ChartsWrapper>
          <div className="flex-1 bg-primary-500 rounded py-2 px-4 min-w-[300px] md:min-w-[60%]">
            <div className="flex justify-between items-center "><div className="flex flex-col text-sm"><span className="text-xs text-mygreen-600">Revenue Generated</span><span>$67,900</span></div><span className="text-mygreen-600"><FaDownload /></span></div>
            <div className="py-2 ">
              <HomeLinechart />
            </div>
          </div>
          <div className="flex-1 relative min-h-[300px]  min-w-[250px] lg:max-w-[40%] md:max-w-[40%] bg-primary-500 rounded p-2">
            <div className="absolute inset-0 overflow-y-auto  py-1 ">
              <div className="capitalize text-center  ">recent transactions</div>
              <Transactions />
            </div>
          </div>
        </ChartsWrapper>
        <HomeCharts />
      </Container>
    </div>
  )
}

export default Home