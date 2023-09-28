import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import ProgressVariedWidth from "./ProgressVariedWidth"
import tw from "tailwind-styled-components"
import { data } from "../data/data"
import { useEffect, useRef, useState } from "react"

const Container = tw.div`p-3  bg-primary-500 rounded-lg`
const HomeCharts = () => {

    return (
        <div style={{ display: "grid", gap: "8px", gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))` }} >
            <Container >
                <div className="text-sm ">Campaign</div>
                <div className="flex flex-col gap-3 h-[250px] justify-center items-center">
                    <ProgressVariedWidth value={76} width={90} />
                    <div className="text-xs">
                        <p className="text-mygreen-500 text-center">$48,352 revenue generated</p>
                        <p className="text-center">includes extra misc expenditures and costs</p>
                    </div>
                </div>
            </Container>
            <Container >
                <div className="text-sm">Sales Quantity</div>
                <div>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={data}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            {/* <Tooltip /> */}
                            {/* <Legend /> */}
                            <Bar dataKey="sales" fill="#4cceac" />
                            <Bar dataKey="purchases" fill="#6870fa" />
                            <Bar dataKey="loss" fill="#db4f4a" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Container>
        </div>
    )
}

export default HomeCharts