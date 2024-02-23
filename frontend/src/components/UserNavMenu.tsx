import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { CircleUserRound } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const UserNavMenu = () => {
    const { user, logout } = useAuth0();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
                <CircleUserRound className="text-orange-500" />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/my-profile" className="font-bold flex flex-1">
                        <Button className="bg-orange-500 hover:bg-orange-600 flex-1 font-bold">
                            My Profile
                        </Button>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/my-orders" className="font-bold flex flex-1">
                        <Button className="bg-orange-500 hover:bg-orange-600 flex-1 font-bold">
                            My Orders
                        </Button>
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button onClick={() => logout()} className="flex flex-1 font-bold bg-slate-800 hover:bg-slate-900">
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserNavMenu