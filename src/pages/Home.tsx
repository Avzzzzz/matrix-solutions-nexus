import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsappChat from "@/components/WhatsappChat";

const images = [
  "src/assets/assembly.jpg",     // update path if needed
  "src/assets/designing.jpg",
  "src/assets/3d-printing.jpg",
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID",     // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"      // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="font-sans">
      <WhatsappChat />
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center bg-gray-900">
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: 1 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Matrix Solution
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-4">
            Partnered with Sagar Process Control
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium mb-8 drop-shadow">
            "Innovating your ideas into reality."
          </p>
          <button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Explore
          </button>
        </div>
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70 transition"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black/50 px-3 py-1 rounded-full hover:bg-black/70 transition"
        >
          ❯
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-aos="fade-up"
        className="py-16 px-6 bg-white shadow-md max-w-6xl mx-auto rounded-lg my-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
            <p className="text-gray-700 mb-4">
              At Matrix Solution, we believe that innovation starts with imagination—and we’re here to transform that imagination into tangible results.
              <br /><br />
              Specializing in innovative design, precision assembly, and high-quality 3D printing services, we work at the intersection of creativity and technology. Our goal is simple yet powerful: to bring your ideas to life with accuracy, efficiency, and an uncompromising dedication to quality.
              <br /><br />
              For over 10 years, our team of engineers, designers, and manufacturing experts has been crafting solutions that go beyond the ordinary. Whether it’s a single custom part or a full-scale production run, we approach every project with the same level of detail and passion. By combining cutting-edge tools with time-tested craftsmanship, we deliver results that are both functional and aesthetically exceptional.
              <br /><br />
              We understand that each client’s needs are unique. That’s why we take a collaborative approach, working closely with you from the initial concept phase to the final delivery. Our process is designed to ensure that every stage—design, prototyping, testing, and production—is handled with precision and care. The result? Products and solutions that are scalable, durable, and perfectly aligned with your goals.
              <br /><br />
              At Matrix Solution, our expertise extends across various industries, including automotive, aerospace, medical, consumer goods, architecture, and education. We’ve built a reputation for reliable performance, whether delivering intricate prototypes, end-use components, or complete assembly systems.
            </p>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2 text-primary">What Sets Us Apart:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><span className="font-semibold">Innovative Mindset</span> – We thrive on solving complex challenges with fresh ideas.</li>
                <li><span className="font-semibold">Advanced Technology</span> – From state-of-the-art 3D printers to precision assembly tools, we invest in the best to deliver the best.</li>
                <li><span className="font-semibold">Quality Assurance</span> – Every project is subjected to strict quality checks to meet global standards.</li>
                <li><span className="font-semibold">Customer-First Approach</span> – Your satisfaction is our ultimate success metric.</li>
                <li><span className="font-semibold">On-Time Commitment</span> – We know time is valuable, so we work to meet deadlines without compromise.</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              Our mission is not just to manufacture products—it’s to build lasting partnerships. We aim to empower innovators, businesses, and creators by turning concepts into reality, helping them make their mark in an ever-evolving market.
              <br /><br />
              From designing the impossible to delivering ready-to-use solutions, Matrix Solution is your trusted partner for innovation, precision, and excellence.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="src/assets/hero-bg.jpg" // Replace with your actual about image path
              alt="Team working on innovative tech solutions"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        data-aos="fade-up"
        className="py-16 px-6 bg-gray-50 text-center max-w-6xl mx-auto rounded-lg mb-12"
      >
        <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Expert Team", desc: "At Matrix Solution, we pride ourselves on the people who make our work possible. Our team is a blend of highly skilled engineers, creative designers, and experienced technicians who bring their expertise to every stage of the process. Each member is dedicated to understanding your needs, solving challenges with innovative thinking, and ensuring your vision is translated into reality. We don’t just work for you—we work with you, becoming your trusted partners from start to finish." },
            { title: "Quality Work", desc: "Quality is the foundation of everything we do. From selecting premium-grade materials to using state-of-the-art manufacturing tools, we ensure that every project meets the highest standards. Each product passes through rigorous quality checks to guarantee accuracy, durability, and flawless finishing. Our attention to detail ensures that the end result not only meets your expectations but often exceeds them." },
            { title: "Affordable", desc: "We believe innovation should be accessible. That’s why our services are designed to deliver maximum value at competitive rates. By optimizing processes, reducing waste, and leveraging modern manufacturing techniques, we provide you with premium quality without the premium price tag. Whether you’re a startup with a tight budget or an established company seeking cost-effective production, we have a solution that fits." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        data-aos="fade-up"
        className="py-16 px-6 bg-white text-center shadow-md max-w-4xl mx-auto rounded-lg mb-20"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
          noValidate
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-4 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
