import Card from "./Card"
import { TUseProducts } from "../hooks/useProducts"
import { UseProductContext } from "../Providers/useProductsProvider"
import { useContext } from "react"

const GroupCard = () => {
    const { products } = useContext(UseProductContext) as TUseProducts

    return (
        <div className="flex flex-wrap mx-8 my-4 gap-6 justify-start md:justify-center">
            {products?.map((product, index) => (
                <Card key={`card-${index}`} {...product} />
            ))}
        </div>
    )
}

export default GroupCard