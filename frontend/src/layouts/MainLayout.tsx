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
            
            <div className="container mx-auto flex-1 py-10">
                {children}
            </div>
        </div>
    )
};

export default MainLayout