import { PenTool, Settings, Sparkles } from "lucide-react";
import animeGirl from "@/assets/anime-girl.jpg";

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto space-y-24">
        {/* Feature 1 - Create Images Effortlessly */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="ai-card p-0 overflow-hidden max-w-md">
            <img
              src={animeGirl}
              alt="AI Generated Character"
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Create Images from Text{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Effortlessly
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              PicLumen's advanced text-to-picture artificial intelligence uses cutting-edge 
              machine learning techniques to create amazing visuals straight from text 
              prompts. Even if you have no background in design or art since as long as you 
              can type, our AI picture generator will satisfy you. Whether you need a lifelike 
              portrait, an imaginative anime scene, or a surreal landscape, PicLumen can 
              create with amazing clarity.
            </p>
          </div>
        </div>

        {/* Feature 2 - How to Generate */}
        <div className="text-center space-y-12">
          <h2 className="text-4xl font-bold">
            How to Generate Artworks from Text to Image
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="ai-card text-center space-y-6">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl gradient-primary glow-primary">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">STEP 1</h3>
                <h4 className="text-lg font-semibold mb-4">Write a prompt</h4>
                <p className="text-muted-foreground">
                  Type a clear prompt. Be as specific as possible with your words to create AI images with optimal effects.
                </p>
              </div>
            </div>

            <div className="ai-card text-center space-y-6">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl gradient-primary glow-primary">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">STEP 2</h3>
                <h4 className="text-lg font-semibold mb-4">Adjust general settings</h4>
                <p className="text-muted-foreground">
                  Our flexible settings enable you to personalize artwork. Choose your preferred model, aspect ratio, generating mode, and image count.
                </p>
              </div>
            </div>

            <div className="ai-card text-center space-y-6">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-xl gradient-primary glow-primary">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">STEP 3</h3>
                <h4 className="text-lg font-semibold mb-4">Generate</h4>
                <p className="text-muted-foreground">
                  Click "Generate" to see your text become amazing visual art. Instantly create a unique image to use, share, or refine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 - Effective Prompts */}
        <div className="text-center space-y-12">
          <h2 className="text-4xl font-bold">
            Effective Prompts to Generate{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Images
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Creating compelling AI-generated images starts with a strong prompt. Here's a 
              well-structured prompt typically includes the following parts:
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium">
                Subject
              </span>
              <span className="text-muted-foreground text-2xl">+</span>
              <span className="px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium">
                Style
              </span>
              <span className="text-muted-foreground text-2xl">+</span>
              <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium">
                Details
              </span>
              <span className="text-muted-foreground text-2xl">+</span>
              <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium">
                Mood
              </span>
            </div>
            
            <div className="ai-card text-left max-w-2xl mx-auto">
              <p className="text-lg mb-2">
                <span className="font-semibold text-primary">Example Prompt:</span>
              </p>
              <p className="text-muted-foreground italic">
                "new year christmas wallpaper 2 of 3, in the style of luminous brushwork, 
                childlike wonder, 2d game art, high detail, eye-catching, luminous quality, paul barson"
              </p>
            </div>
            
            <p className="text-muted-foreground mt-8 max-w-3xl mx-auto">
              Start with the core subject, specify the artistic style you prefer, add details about 
              colors or scene elements, and set a mood. Experiment with different combinations to see 
              how they influence your final image!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;