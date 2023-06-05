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
    <div className="grid gap-10 grid-cols-5 grid-rows-6 md:grid-cols-2 md:gap-2 mt-8 mb-8 mx-24 md:mx-1">
        {cards.map((card, index) => (
            <Card key={`card-${index}`} className="mx-1 md:mx-2" {...card} />
        ))}
    </div>
)

export default GroupCard