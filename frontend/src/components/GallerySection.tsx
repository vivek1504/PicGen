import heroShowcase from "@/assets/hero-showcase.jpg";
import animeGirl from "@/assets/anime-girl.jpg";
import spaceBedroom from "@/assets/space-bedroom.jpg";
import purpleCar from "@/assets/purple-car.jpg";
import flowers from "@/assets/flowers.jpg";

const GallerySection = () => {
  const galleryImages = [
    { src: flowers, alt: "Tropical flowers bouquet", category: "Nature" },
    { src: heroShowcase, alt: "Fantasy ship in clouds", category: "Fantasy" },
    { src: animeGirl, alt: "Anime character art", category: "Anime" },
    { src: spaceBedroom, alt: "Futuristic space bedroom", category: "Sci-Fi" },
    { src: purpleCar, alt: "Cyberpunk purple car", category: "Automotive" },
    { src: animeGirl, alt: "Digital portrait", category: "Portrait" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl font-bold">
            Limitless Creativity with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              No Style Constraints
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating compelling AI-generated images unleashes creativity by removing traditional 
            restrictions. Without worrying about technical drawing skills or being limited by 
            inspiration solely from references, artists can now dive deep into their imagination.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer transition-smooth hover:scale-105"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-end p-3">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-smooth">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            dreamscapes—PicLumen turns your words into visuals with remarkable accuracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;