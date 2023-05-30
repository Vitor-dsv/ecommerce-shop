import data from './preview-data.json';

import GroupCard, { ICard } from "./GroupCard";

const ProductListining = () => {
    return (
        <GroupCard cards={(data.objetos as ICard[])} />
    )
}

export default ProductListining;