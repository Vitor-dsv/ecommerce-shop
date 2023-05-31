import Combobox from "@/shared/Combobox";
import Categories from "./Categories";

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

const OrderCard = () => (
    <div className="mt-8 mb-8 ml-10 mr-10 h-12 flex justify-between">
        <Categories oderCategories={categories} />
        <Combobox />
    </div>
)

export default OrderCard;