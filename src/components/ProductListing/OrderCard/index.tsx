import Dropdown from "@/shared/Dropdown";
import Categories from "./Categories";
import Pagination from "@/shared/Pagination";

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

const options = [
    {
        name: 'Mais vendidos',
        active: true,
    },
    {
        name: 'Preço: Maior - menor',
        active: false,
    },
    {
        name: 'Preço: Menor - maior',
        active: false,
    }
]

const OrderCard = () => (
    <>
        <div className='mt-8 mb-8 ml-10 mr-10 h-12 flex justify-between'>
            <Categories oderCategories={categories} />
            <Dropdown className="z-50" options={options} />
        </div>
        <div className='m-0 p-0 mr-10 flex justify-end'>
            <Pagination />
        </div>
    </>
)

export default OrderCard;