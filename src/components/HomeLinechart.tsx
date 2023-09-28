import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts"
import { data } from "../data/data"
const HomeLinechart = () => {
    return (
        <ResponsiveContainer width='100%' height={250}>
            <LineChart data={data} margin={{ top: 5, bottom: 5, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#4cceac" />
                <Line type="monotone" dataKey="purchases" stroke="#6870fa" />
                <Line type="monotone" dataKey="loss" stroke="#db4f4a" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default HomeLinechart