import { Link } from "react-router-dom"
import NavMain from "./NavMain"
import NavMobile from "./NavMobile"
import burger from '../assets/BurgerBiteHeader.png'

const Header = () => {

    return (
        <div className="py-6">
            <div className="container mx-auto flex justify-between items-center ">
                <Link to="/" className="flex">
                    <img src={burger} className="w-10 h-10" />
                    <span className="text-orange-600 text-2xl font-bold tracking-tight pr-1">Gourmet</span>
                    <span className="text-orange-500 text-2xl tracking-tight">Grub</span>
                </Link>
                <div className="flex md:hidden justify-center items-center">
                    <NavMobile />
                </div>
                <div className="hidden md:block">
                    <NavMain />
                </div>
            </div>
        </div>
    )
}

export default Header