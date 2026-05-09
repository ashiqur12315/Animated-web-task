import { motion } from "framer-motion";

const services = [
  "SEO",
  "Paid Media",
  "Social",
  "Creative",
  "Branding",
  "Strategy",
];

const Services = () => {
  return (
    <section className="py-32 section-padding">
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        <div>
          <p className="uppercase tracking-[0.3em] text-gray-400 mb-6">
            Services
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-none uppercase">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 p-8 rounded-3xl bg-white/5 hover:bg-white hover:text-black transition-all duration-500"
            >
              <h3 className="text-3xl font-bold uppercase">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;