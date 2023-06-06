import IconBag from "@/shared/Icons/bag"
import IconSearch from "@/shared/Icons/search"
import Input from "@/shared/Input"

const HeaderEnd = () => (
    <div className="w-1/2 flex justify-end items-center md:static md:p-0 md:m-0 md:mt-8 md:w-full md:justify-center">
        <div className="flex justify-end">
            <Input className="w-80 bg-slate-200 h-4 rounded-md p-5 text-black mr-2" placeholder="Procurando por algo específico?" />
            <IconSearch className="w-12 absolute h-10 pt-2" />
        </div>

        <IconBag className="w-8 h-8" />
    </div>
)

export default HeaderEnd