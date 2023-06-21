import Card from "./Card"
import { TUseProducts } from "../hooks/useProducts"
import { UseProductContext } from "../Providers/useProductsProvider"
import { useContext } from "react"

const GroupCard = () => {
    const { products, isLoading } = useContext(UseProductContext) as TUseProducts

    return (
        <div aria-disabled={isLoading} className={`flex flex-wrap mx-8 my-4 gap-6 justify-start md:justify-center disabled:pointer-events-none disabled:opacity-20`}>
            {products?.map((product, index) => (
                <Card key={`card-${index}`} {...product} />
            ))}
        </div>
    )
}

export default GroupCard