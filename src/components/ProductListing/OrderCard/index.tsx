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
        <div className='mt-8 mb-8 ml-10 mr-10 h-12 md:flex lg:flex md:flex-col justify-between md:m-4 md:h-20 md:gap-4'>
            <Categories oderCategories={categories} />
            <Dropdown className="z-50" options={options} />
        </div>
        <div className='m-0 p-0 mr-10 flex justify-end'>
            <Pagination activePage={1} quantityPage={6} />
        </div>
    </>
)

export default OrderCard;