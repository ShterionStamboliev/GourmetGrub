import { MapPin } from "lucide-react"
import { Pizza } from "lucide-react"
import { ConciergeBell } from "lucide-react"
import foodApp from "../assets/FoodApp.png"
import appStore from "../assets/AppStore.png"
import googleApp from "../assets/GoogleApp.png"
import { Link } from "react-router-dom"

const HomePage = () => {

    return (
        <div className="flex flex-col gap-10 space-y-6">

            <div className="flex flex-col gap-2 text-center -mt-16 bg-white rounded-lg py-6 shadow-lg shadow-slate-500/50 ml-16 mr-16">
                <h2 className="text-2xl tracking-tight text-black-100">
                    How to order?
                </h2>
                <span className="text-4xl font-bold tracking-tight text-orange-600 ">
                    It's so simple.
                </span>
            </div>

            <div className="md:flex gap-16 flex-1 justify-center items-center flex-wrap">

                <div className="flex flex-col items-center justify-center whitespace-nowrap pt-8">
                    <MapPin className="w-16 h-16 text-orange-600" />
                    <h3 className="font-bold text-lg text-slate-800">Tell us where you are.</h3>
                    <div className="text-center">We'll show you restaurants that you can order from.</div>
                </div>

                <div className="flex flex-col items-center justify-center whitespace-nowrap pt-8">
                    <Pizza className="w-16 h-16 text-orange-600" />
                    <h3 className="font-bold text-lg text-slate-800">Find what you're looking for.</h3>
                    <div className="text-center">Search for dishes or hundreds of international cuisines.</div>
                </div>

                <div className="flex flex-col items-center justify-center whitespace-nowrap pt-8">
                    <ConciergeBell className="w-16 h-16 text-orange-600" />
                    <h3 className="font-bold text-lg text-slate-800">Order with delivery or pickup.</h3>
                    <div className="text-center">We will inform you about the progress of your order.</div>
                </div>

            </div>

            <div className="flex justify-center gap-24 w-full flex-wrap pt-10 bg-gray-100">

                <div className="flex flex-col justify-center">
                    <span className="font-bold text-4xl text-slate-900">Download our app</span>
                    <span className="font-medium text-2xl text-slate-800 pt-6">Find a restaurant, order and eat!</span>

                    <div className="flex pt-6 items-center">
                        <div className="pr-6">
                            <Link to="#">
                                <img className="w-36 h-12" src={appStore} />
                            </Link>
                        </div>

                        <div>
                            <Link to="#">
                                <img className="w-36 h-12" src={googleApp} />
                            </Link>
                        </div>
                    </div>
                </div>



                <div>
                    <img className="pt-6" src={foodApp} />
                </div>
            </div>

        </div>
    )
}

export default HomePage