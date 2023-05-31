import data from './preview-data.json';

import GroupCard, { ICard } from "./GroupCard";
import OrderCard from './OrderCard';

const ProductListining = () => {
    return (
        <>
            <OrderCard />
            <GroupCard cards={(data.objetos as ICard[])} />
        </>
    )
}

export default ProductListining;