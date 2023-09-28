const transactionData = [
    {
        id: "0278",
        name: "Yeezus Wolfe",
        date: "2021-10-04",
        price: "310"
    },
    {
        id: "0276",
        name: "Cornel West",
        date: "2021-11-04",
        price: "140"
    },
    {
        id: "0275",
        name: "Jay Lawrence",
        date: "2022-09-12",
        price: "260"
    },
    {
        id: "0274",
        name: "Jon Snow",
        date: "2022-04-04",
        price: "900"
    },
    {
        id: "0271",
        name: "John Doe",
        date: "2023-03-07",
        price: "127"
    },
    {
        id: "0272",
        name: "Max Stark",
        date: "2021-12-04",
        price: "349"
    },
    {
        id: "0273",
        name: "Janet kim",
        date: "2021-11-04",
        price: "876"
    },
]
const Transactions = () => {
    return (
        <div className=" py-1 text-xs">
            {
                transactionData.map(({ id, price, date, name }) => {
                    return (
                        <div key={id} className="border-t-2 cursor-pointer border-b-2 border-primary-700 px-2 py-2 flex justify-between items-center">
                            <div className="flex flex-col">
                                <span>{id}</span>
                                <span>{name}</span>
                            </div>
                            <div>{date}</div>
                            <div className="bg-mygreen-500 text-white p-2 rounded">
                                {`$${price}`}
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Transactions