import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "9867214498"; // Replace with your WhatsApp number

export default function WhatsappChat() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
    >
      <FaWhatsapp size={24} />
      <span className="font-semibold">Chat with us</span>
    </a>
  );
}