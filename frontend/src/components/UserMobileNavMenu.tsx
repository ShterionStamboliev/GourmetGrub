import { CircleUserRound } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { SheetTitle } from "./ui/sheet"

const UserMobileNavMenu = () => {
    const { user, logout } = useAuth0();

    return (
        <>
            <div className="flex py-4">
                <CircleUserRound className="text-orange-500" />
                <SheetTitle className="pl-2">
                    {user?.email}
                </SheetTitle>
            </div>

            <div className="flex flex-col flex-1 justify-center space-y-4">
                <Link to="/my-restaurant" className="font-bold flex flex-1">
                    <Button className="flex-1 font-bold bg-orange-500 hover:bg-orange-600 text-center">
                        My Restaurant
                    </Button>
                </Link>

                <Link to="/my-profile" className="font-bold flex flex-1">
                    <Button className="flex-1 font-bold bg-orange-500 hover:bg-orange-600 text-center">
                        My Profile
                    </Button>
                </Link>

                <Link to="/my-orders" className="font-bold flex flex-1">
                    <Button className="flex-1 font-bold bg-orange-500 hover:bg-orange-600 text-center">
                        My Orders
                    </Button>
                </Link>

                <Button
                    onClick={() => logout()}
                    className="flex flex-1 font-bold bg-slate-800 hover:bg-slate-900 text-center">
                    Log Out
                </Button>
            </div>
        </>
    )
}

export default UserMobileNavMenu