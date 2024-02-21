import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const NavMobile = () => {

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
                <SheetDescription className="flex py-2">
                    <Button className="flex-1 font-bold bg-orange-500 hover:bg-orange-600">Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default NavMobile;