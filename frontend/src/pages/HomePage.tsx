import { MapPin } from "lucide-react"
import { Pizza } from "lucide-react"
import { ConciergeBell } from "lucide-react"

const HomePage = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 text-center -mt-16 bg-white rounded-lg py-6 shadow-lg shadow-slate-500/50">
                <h2 className="text-2xl tracking-tight text-black-100">
                    How to order?
                </h2>
                <span className="text-4xl font-bold tracking-tight text-orange-600 ">
                    It's so simple.
                </span>
            </div>
            <div className="md:flex gap-32 justify-center items-center">

                <div className="flex flex-col flex-1 items-center justify-center">
                    <MapPin className="w-16 h-16 text-orange-600"/>
                    <h3 className="font-bold text-lg text-slate-800 flex-1">Tell us where you are.</h3>
                    <div className="text-center">We'll show you restaurants that you can order from.</div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-center">
                    <Pizza className="w-16 h-16 text-orange-600"/>
                    <h3 className="font-bold text-lg text-slate-800 flex-1">Find what you're looking for.</h3>
                    <div className="text-center">Search for dishes or hundreds of international cuisines.</div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-center">
                    <ConciergeBell className="w-16 h-16 text-orange-600"/>
                    <h3 className="font-bold text-lg text-slate-800 flex-1">Order with delivery or pickup.</h3>
                    <div className="text-center">We will inform you about the progress of your order.</div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePage