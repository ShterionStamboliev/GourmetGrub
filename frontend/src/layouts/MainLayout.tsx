import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroLayout from "@/components/HeroLayout";

type Props = {
    children: React.ReactNode
};

const MainLayout = ({ children }: Props) => {
    
    return (
        <div className="flex flex-col min-h-screen">

            <Header />
            <HeroLayout />
            
            <div className="flex-1 pt-10">
                {children}
            </div>
            <Footer />
        </div>
    )
};

export default MainLayout