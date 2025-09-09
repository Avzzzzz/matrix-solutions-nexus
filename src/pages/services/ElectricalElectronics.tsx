import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsappChat from "@/components/WhatsappChat";

const ElectricalElectronics = () => {
  return (
    <div className="font-sans">
      <WhatsappChat />
      <section className="w-full bg-[#040404] text-white">
        <div className="relative flex h-[50vh] items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Electrical and Electronics"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold md:text-5xl">
              Electrical & Electronics
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Innovative solutions in electrical and electronic systems.
            </p>
            <Link to="/contact">
              <Button className="mt-6 rounded-full bg-[#FFD700] text-black hover:bg-[#e5c100]">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
          <h2 className="mb-6 text-3xl font-semibold">Our Capabilities</h2>
          <ul className="space-y-4 text-lg leading-relaxed">
            <li>✔ PCB Design and Assembly</li>
            <li>✔ Circuit Simulation and Prototyping</li>
            <li>✔ Embedded System Development</li>
            <li>✔ Power Electronics and Energy Systems</li>
            <li>✔ Automation and Control Systems</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ElectricalElectronics;
