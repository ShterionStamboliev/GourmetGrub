import { Instagram } from "lucide-react"
import { Facebook } from "lucide-react"
import { Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="bg-orange-500 py-10">

            <div className="container mx-auto flex flex-col justify-between">
                <span className="text-3xl text-white font-bold tracking-tight text-center">
                    Gourmet Grub
                </span>
                <span className="text-center pt-4 text-white font-semibold">
                    Follow us
                </span>
                <div className="flex justify-center items-center pt-4">
                    <span className="px-5">
                        <Link to="#" >
                            <Instagram className="text-white" />
                        </Link>
                    </span>
                    <span className="px-5">
                        <Link to="#">
                            <Facebook className="text-white" />
                        </Link>
                    </span>
                    <span className="px-5">
                        <Link to="#">
                            <Twitter className="text-white" />
                        </Link>
                    </span>
                </div>
                <div className="text-white font-bold tracking-tight flex flex-col gap-2 pt-6">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>

        </div>
    )
}

export default Footer