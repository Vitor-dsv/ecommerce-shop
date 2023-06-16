import { TProductList } from "@/services/product/ProductModel"
import Card from "./Card"

interface Props {
    cards: TProductList['data']
}

const GroupCard = ({ cards }: Props) => (
    <div className="flex flex-wrap mx-8 my-4 gap-6 justify-start md:justify-center">
        {cards.map((card, index) => (
            <Card key={`card-${index}`} {...card} />
        ))}
    </div>
)

export default GroupCard