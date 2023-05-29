
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Header = () => (
    <header className="bg-white h-20 pl-44 pr-44 flex w-full items-center">
        <div className="w-1/2 flex items-center">
            <h1 className="font-saira font-black not-italic text-stone-600 text-5xl">Moda Shop</h1>
        </div>
        <div className="w-1/2 flex justify-end items-center">
            <input className="bg-slate-200 w-80 h-4 rounded-md p-5 text-black" type="text" placeholder="Procurando por algo específico?" />
            <FontAwesomeIcon icon={faCartShopping} className="fa-light fa-cart-shopping w-5" />
            <FontAwesomeIcon icon={faCartShopping} className="fa-light fa-cart-shopping w-5" />
        </div>

    </header>
)

export default Header