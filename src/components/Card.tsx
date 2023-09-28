import Progress from "./Progress";
//
type CardDetails = {
  icon: React.ReactNode,
  total: string,
  value: number,
  text: string,
  increase: number
}

const Card = ({ icon, total, value, text, increase }: CardDetails) => {
  return (
    <div className="p-5 rounded bg-primary-500  text-sm">
      <div className="flex justify-between items-center py-2">
        <div className="flex flex-col gap-2 ">
          <span className="text-base text-mygreen-700">{icon}</span>
          <span>{total}</span>
        </div>
        <Progress value={value} />
      </div>
      <div className="flex justify-between items-center text-mygreen-700">
        <span>{text}</span>
        <span>{`+${increase}%`}</span>
      </div>
    </div>
  )
}

export default Card