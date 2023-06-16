import { IProduct } from "@/services/product/ProductModel";

type Props = {
    className?: string
} & IProduct

const Card = ({ description, monetaryValue, src, className }: Props) => (
    <div className={`flex flex-col bg-white rounded-md ${className}`}>
        <img className="w-64 h-96 md:h-72 rounded-t-lg" src={src} alt="roupa" />
        <p className="pt-2 pl-2 text-xs font-normal">{description}</p>
        <div className="border-solid border border-stone-100 w-11/12 rounded-md m-2"></div>
        <p className="text-xs font-black pb-2 pl-2">{monetaryValue}</p>
    </div>
)

export default Card;