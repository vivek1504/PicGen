import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import GallerySection from "@/components/GallerySection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <StatsSection />
                <FeaturesSection />
                <GallerySection />
                <FooterSection />
            </main>
        </div>
    );
};

export default Index;
