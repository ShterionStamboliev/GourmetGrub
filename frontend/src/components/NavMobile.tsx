import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"
import { useAuth0 } from "@auth0/auth0-react"
import UserNavMenu from "./UserNavMenu"

const NavMobile = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const loginRedirect = async () => {
        await loginWithRedirect();
    };

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500" />
            </SheetTrigger>

            <SheetContent>
                <SheetTitle>
                    <span>Gourmet Grub</span>
                </SheetTitle>
                <Separator />
                {isAuthenticated ? (
                    <UserNavMenu />
                ) : (
                    <SheetDescription className="flex py-2">
                        <Button onClick={loginRedirect} className="flex-1 font-bold bg-orange-500 hover:bg-orange-600">Log In</Button>
                    </SheetDescription>
                )}

            </SheetContent>
        </Sheet>
    )
}

export default NavMobile;