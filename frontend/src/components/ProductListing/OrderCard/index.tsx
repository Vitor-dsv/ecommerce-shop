import Dropdown from "@/shared/Dropdown";
import Categories from "./Categories";
import { UseProductContext } from "../Providers/useProductsProvider";
import { useContext, useMemo, useState } from "react";
import { TUseProducts } from "../hooks/useProducts";
import Pagination from "../Pagination";

const categories = [
    {
        name: 'Todos os produtos',
        active: true,
    },
    {
        name: 'Camisetas',
    },
    {
        name: 'Casacos',
    }
]

const OrderCard = () => {
    const [optionActive, setOptionActive] = useState<number>()
    const { getAllHighestPrice, getAllLowestPrice } = useContext(UseProductContext) as TUseProducts

    const options = useMemo(() => [
        {
            name: 'Preço: Maior - menor',
            fetch: async () => {
                await getAllHighestPrice(0)
                setOptionActive(0)
            },
            active: optionActive === 0,
        },
        {
            name: 'Preço: Menor - maior',
            fetch: async () => {
                await getAllLowestPrice(0)
                setOptionActive(1)
            },
            active: optionActive === 1,
        }
    ], [getAllHighestPrice, getAllLowestPrice, optionActive])

    return (
        <>
            <div className='mt-8 mb-8 ml-10 mr-10 h-12 flex md:flex-col justify-between md:m-4 md:h-20 md:gap-4'>
                <Categories oderCategories={categories} />
                <Dropdown className="z-50" options={options} />
            </div>
            <div className='m-0 p-0 dk:mr-10 flex dk:justify-end md:w-full md:justify-center md:items-center md:pt-4'>
                <Pagination />
            </div>
        </>
    )
}

export default OrderCard;