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
    <div className="flex flex-wrap mx-8 my-4 gap-6 justify-start md:justify-center">
        {cards.map((card, index) => (
            <Card key={`card-${index}`} {...card} />
        ))}
    </div>
)

export default GroupCard