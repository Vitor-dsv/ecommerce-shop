import HeaderEnd from "./HeaderEnd"
import HeaderStart from "./HeaderStart"

const Header = () => (
    <header className="bg-white h-20 pl-44 pr-44 flex flex-row w-full items-center md:flex-col md:h-40 md:px-0 md:py-0 md:justify-center">
        <HeaderStart />
        <HeaderEnd />
    </header>
)

export default Header