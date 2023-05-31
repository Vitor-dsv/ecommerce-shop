import Card from "./Card"

export interface ICard {
    img: string
    name: string
    value: string
}

interface Props {
    cards: ICard[]
}

const GroupCard = ({ cards }: Props) => (
    <div className="flex mt-8 mb-8 ml-5 mr-5 flex-wrap">
        {cards.map((card, index) => (
            <Card key={`card-${index}`} className="m-4 w-[calc((100% - 6rem) / 6)]" {...card} />
        ))}
    </div>
)

export default GroupCard