const stats = [
  {
    number: "250+",
    label: "Campaigns",
  },
  {
    number: "120M",
    label: "Views Generated",
  },
  {
    number: "90+",
    label: "Team Members",
  },
];

const Stats = () => {
  return (
    <section className="py-32 section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((item) => (
          <div
            key={item.label}
            className="border border-white/10 rounded-[40px] p-10 bg-white/5"
          >
            <h2 className="text-6xl md:text-8xl font-black">
              {item.number}
            </h2>

            <p className="mt-6 text-gray-400 uppercase tracking-[0.2em]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;