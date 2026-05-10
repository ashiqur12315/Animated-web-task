import serviceImage1 from "../assets/images/b1.png";
import serviceImage2 from "../assets/images/b2.png";
import serviceImage3 from "../assets/images/b3.png";

const services = [
  {
    title: "Digital PR",
    image: serviceImage1,
  },

  {
    title: "Organic Social & Content",
    image: serviceImage2,
  },

  {
    title: "Search & Growth Strategy",
    image: serviceImage3,
  },

  {
    title: "Content Experience",
    image: serviceImage1,
  },

  {
    title: "Data & Insights",
    image: serviceImage2,
  },

  {
    title: "Onsite SEO",
    image: serviceImage3,
  },
];

export const ServicesSection = () => {
  return (
    <section
      className="
        bg-[#f3f3f0]
        rounded-[40px]
        mx-2
        mt-32
        px-6
        lg:px-10
        py-10
      "
    >
      {/* TOP */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          justify-between
          gap-10
          border-b
          border-black/15
          pb-8
        "
      >
        <h2
          className="
            text-[14vw]
            lg:text-[7vw]
            leading-[0.9]
            tracking-[-0.07em]
            font-bold
            text-black
            flex
            items-center
            gap-4
          "
        >
          Our
          <img
            src={serviceImage1}
            alt=""
            className="
              w-20
              h-20
              lg:w-24
              lg:h-24
              rounded-[24px]
              object-cover
            "
          />
          Services
        </h2>

        <button
          className="
            bg-white
            text-black
            px-8
            py-4
            rounded-full
            border
            border-black/10
            hover:bg-black
            hover:text-white
            transition-all
            duration-500
            self-start
          "
        >
          View All Services ↗
        </button>
      </div>

      {/* SERVICES */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-x-20
          mt-10
        "
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="
              relative
              border-b
              border-black/15
              overflow-hidden
              group
              cursor-pointer
              hover:rounded-full
            "
          >
            {/* IMAGE BG */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
              "
            >
              <img
                src={service.image}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/35
                "
              />
            </div>

            {/* CONTENT */}
            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-5
                py-7
                px-8
              "
            >
              {/* ARROW */}
              <div
                className="
                  text-white
                  text-5xl
                  opacity-0
                  -translate-x-5
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all
                  duration-500
                "
              >
                ↗
              </div>

              {/* TEXT */}
              <h3
                className="
                  text-5xl
                  lg:text-6xl
                  leading-none
                  tracking-[-0.05em]
                  font-medium
                  text-black
                  group-hover:text-white
                  transition-colors
                  duration-500
                "
              >
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
