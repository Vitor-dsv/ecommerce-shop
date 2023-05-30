import IconBag from "@/shared/Icons/bag"
import IconSearch from "@/shared/Icons/search"
import Input from "@/shared/Input"

const Header = () => (
    <header className="bg-white h-20 pl-44 pr-44 flex w-full items-center">
        <div className="w-1/2 flex items-center">
            <h1 className="font-quick font-black not-italic text-stone-600 text-5xl">seven</h1>
        </div>
        <div className="w-1/2 flex justify-end items-center relative">
            <Input className="bg-slate-200 w-80 h-4 rounded-md p-5 text-black mr-2" placeholder="Procurando por algo específico?" />
            <IconSearch className="w-8 absolute right-12" />
            <IconBag className="w-8" />
        </div>
    </header>
)

export default Header