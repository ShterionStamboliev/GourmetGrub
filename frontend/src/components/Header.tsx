import { Link } from "react-router-dom"
import { NavMobile } from "./NavMobile"
import { NavMain } from "./NavMain"

const Header = () => {

    return (
        <div className="border-b-2 border-b-orange-400 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tight text-orange-400">
                    Gourmet Grub
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