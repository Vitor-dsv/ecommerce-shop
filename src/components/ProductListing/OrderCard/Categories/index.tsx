interface OrderCategorie {
    name: string
    active?: boolean
}

interface Props {
    oderCategories: OrderCategorie[]
}

const Categories = ({ oderCategories }: Props) => {
    const getClassBorder = (active?: boolean) => {
        const borderDefault = 'border-b-4 hover:border-orange-400'

        if (active)
            return `${borderDefault} border-orange-400`

        return `${borderDefault} border-transparent`
    }

    return (
        <div className="flex md:h-14 gap-10 md:gap-2">
            {oderCategories.map((categorie, index) => (
                <p key={`categorie-${index}`} className={`h-8 md:h-12 p-0 m-0 font-black cursor-pointer transition ${getClassBorder(categorie.active)}`}>{categorie.name.toUpperCase()}</p>
            ))}
        </div>
    )
}

export default Categories