const Footer = () => {
  return (
    <footer className="py-24 section-padding border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
            Let’s Build
            <br />
            Something Bold
          </h2>
        </div>

        <div className="space-y-4 text-gray-400">
          <p>hello@riseclone.com</p>
          <p>London, UK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;