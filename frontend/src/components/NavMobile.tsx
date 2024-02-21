import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

export const NavMobile = () => {

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-400" />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle>
                    <span>Gourmet Grub</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex py-2">
                    <Button className="flex-1 font-bold bg-orange-400">Log In</Button>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}
