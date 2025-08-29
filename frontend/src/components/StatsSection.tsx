const StatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              1,563,090+
            </div>
            <div className="text-muted-foreground text-lg font-medium tracking-wide">
              ACTIVE CREATORS
            </div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              206,354,278+
            </div>
            <div className="text-muted-foreground text-lg font-medium tracking-wide">
              IMAGES GENERATED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;