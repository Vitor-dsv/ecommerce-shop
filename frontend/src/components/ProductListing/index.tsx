import data from './preview-data.json';

import GroupCard, { ICard } from "./GroupCard";
import OrderCard from './OrderCard';
import Pagination from '@/shared/Pagination';

const ProductListining = () => {
    return (
        <>
            <OrderCard />
            <GroupCard cards={(data.objetos as ICard[])} />
            <div className='m-0 p-0 mr-10 mb-3 flex justify-end'>
                <Pagination activePage={1} quantityPage={6} />
            </div>
        </>
    )
}

export default ProductListining;