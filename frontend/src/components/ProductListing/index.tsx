import GroupCard from "./GroupCard";
import OrderCard from './OrderCard';
import UseProductsProvider from "./Providers/useProductsProvider";
import Pagination from "./Pagination";
import LoadingListing from "./LoadingListing";

const ProductListining = () => (
    <UseProductsProvider>
        <>
            <LoadingListing />
            <OrderCard />
            <GroupCard />
            <div className='m-0 p-0 mr-10 mb-3 flex justify-end'>
                <Pagination />
            </div>

        </>
    </UseProductsProvider>
)

export default ProductListining;