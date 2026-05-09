const projects = [
  {
    title: "Nike Campaign",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    title: "Spotify Social",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  },
  {
    title: "Adidas Launch",
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-32 section-padding">
      <div className="mb-20">
        <p className="uppercase tracking-[0.3em] text-gray-400 mb-4">
          Featured Work
        </p>

        <h2 className="text-5xl md:text-7xl font-black uppercase">
          Selected Projects
        </h2>
      </div>

      <div className="space-y-20">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-[40px] relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

            <div className="absolute bottom-10 left-10">
              <h3 className="text-4xl md:text-6xl font-black uppercase">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;