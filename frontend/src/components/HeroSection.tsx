import heroShowcase from "@/assets/hero-showcase.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shuffle, Sparkles } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [activeStyle, setActiveStyle] = useState("Painting");

    const generateImage = async () => {
        if (!prompt) return;
        setLoading(true);
        setImage(null);

        try {
            const response = await fetch("http://localhost:5000/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            setImage(data.image);
        } catch (err) {
            console.error(err);
            alert("Failed to generate image!");
        } finally {
            setLoading(false);
        }
    }
    const styles = [
        { name: "Anime", color: "bg-pink-500" },
        { name: "Painting", color: "bg-orange-500" },
        { name: "Cartoon", color: "bg-blue-500" },
        { name: "Portrait", color: "bg-green-500" },
        { name: "More", color: "bg-purple-500" },
    ];

    return (
        <section className="relative py-20 px-4">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                Free Text to Image{" "}
                                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    AI Generator
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                PicLumen's free text-to-image AI offers rapid, strong, multifarious image generating capability.
                                In less than ten seconds, it can easily transform your descriptions into magnificent artificial
                                intelligence artwork. Furthermore, our fine-tuned AI models provide the chance to use your
                                fantastic artwork for any project.
                            </p>
                        </div>

                        {/* Input Section */}
                        <div className="space-y-4">
                            <div className="relative">
                                <Input
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    placeholder="A black background with the wordmark Good things are coming."
                                    className="w-full h-14 px-6 text-lg rounded-xl border-border/50 bg-card/50 backdrop-blur-sm focus:border-primary focus:ring-primary"
                                />
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="absolute right-2 top-2 h-10 w-10 p-0 hover:bg-primary/10"
                                >
                                    <Shuffle className="w-4 h-4" />
                                </Button>
                            </div>
                            <Button className="btn-primary w-full h-14 text-lg font-semibold" onClick={generateImage} disabled={loading}>
                                <Sparkles className="w-5 h-5 mr-2" />
                                Generate
                            </Button>
                        </div>
                    </div>

                    {/* Right side - Image showcase */}
                    <div className="relative">
                        <div className="ai-card p-0 overflow-hidden max-w-md mx-auto">
                            <img
                                src={image ? image : heroShowcase}
                                alt="AI Generated Artwork Showcase"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>

                        {/* Style tabs */}
                        <div className="flex items-center justify-center space-x-3 mt-6">
                            {styles.map((style) => (
                                <button
                                    key={style.name}
                                    onClick={() => setActiveStyle(style.name)}
                                    className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-smooth
                    ${activeStyle === style.name
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground'
                                        }
                  `}
                                >
                                    {style.name}
                                </button>
                            ))}
                            <div className="text-sm text-muted-foreground font-medium">
                                20+
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;