import { ICard } from "..";

type Props = {
    className: string
} & ICard

const Card = ({ img, name, value, className }: Props) => (
    <div className={`${className} flex flex-col bg-white rounded-md`}>
        <img className="w-44 h-72 rounded-t-lg" src={img} alt="roupa" />
        <p className="pt-2 pl-2 text-xs font-normal">{name}</p>
        <div className="border-solid border border-stone-100 w-11/12 rounded-md m-2"></div>
        <p className="text-xs font-black pb-2 pl-2">{value}</p>
    </div>
)

export default Card;