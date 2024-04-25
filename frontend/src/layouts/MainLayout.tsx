import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroLayout from "@/components/HeroLayout";

type MainLayoutProps = {
    children: React.ReactNode;
    showHero?: boolean;
};

const MainLayout = ({ children, showHero = false }: MainLayoutProps) => {

    return (
        <div className="flex flex-col min-h-screen">

            <Header />
            {showHero && <HeroLayout />}

            <div className="flex-1 pt-10">
                {children}
            </div>

            <Footer />
            
        </div>
    )
};

export default MainLayout