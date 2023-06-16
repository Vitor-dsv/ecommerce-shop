import GroupCard from "./GroupCard";
import OrderCard from './OrderCard';
import Pagination from '@/shared/Pagination';
import { getAllProductsWithPaging } from '@/services/product/ProductService';

const ProductListining = async () => {

    const { data } = await getAllProductsWithPaging({ index: 0, max: 4 });

    return (
        <>
            <OrderCard />
            <GroupCard cards={(data)} />
            <div className='m-0 p-0 mr-10 mb-3 flex justify-end'>
                <Pagination activePage={1} quantityPage={6} />
            </div>
        </>
    )
}

export default ProductListining;