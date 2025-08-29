import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Header = () => {
    return (
        <header className="relative z-50 w-full border-b border-border/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-primary glow-primary">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-foreground">PicGen</span>
                    </div>

                    <Button className="btn-primary">
                        login / signup
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;