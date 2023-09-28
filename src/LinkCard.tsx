// import { IconType } from "react-icons";
// import { AiFillHome } from "react-icons/ai"; 
import { Link, } from "react-router-dom"
type Links = {
  icon: React.ReactNode,
  desc: string,
  link: string,
  state: string,
  setState: React.Dispatch<string>
}
const LinkCard = (props: Links) => {
  return (
    <Link onClick={() => { props.setState(props.link) }} to={`${props.link ? props.link : ""}`} className={`block mb-1   py-1 rounded px-1 ${props.state === props.link ? "text-myblue-700 bg-primary-700" : ""}`}>
      <div className="flex items-center w-max text-sm">
        <div>{props.icon}</div>
        <div className="capitalize ps-1">{props.desc}</div>
      </div>
    </Link>
  )
}

export default LinkCard