import IconBag from "@/shared/Icons/bag"
import IconSearch from "@/shared/Icons/search"
import Input from "@/shared/Input"

const HeaderEnd = () => (
    <div className="w-1/2 flex justify-end items-center relative">
        <Input className="bg-slate-200 w-80 h-4 rounded-md p-5 text-black mr-2" placeholder="Procurando por algo específico?" />
        <IconSearch className="w-8 absolute right-12" />
        <IconBag className="w-8" />
    </div>
)

export default HeaderEnd