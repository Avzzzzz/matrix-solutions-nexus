// src/pages/ControlPanelProductDetail.tsx
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const productDetails: Record<string, { name: string; image: string; description: string }> = {
  "dc-controller": {
    name: "DC Controller",
    image: "images/DC controller.jpg",
    description: "Compatible with any 12 V DC Motor, supporting forward and reverse directions.",
  },
  "heater-controller": {
    name: "Heater Controller",
    image: "public/images/Heater controller.jpg",
    description: "Heating capacity of up to 3000 KW, featuring an emergency control for safety.",
  },
  "stepper-dc-controller": {
    name: "Stepper & DC Controller",
    image: "public/images/Stepper & DC Controller.jpg",
    description: "Supports 12V DC Motor Control, as well as Nema17 and Nema 23 stepper motor control.",
  },
  "dc-stepper-heater": {
    name: "DC, Stepper & Heater Controller",
    image: "public/images/DC, Stepper & Heater Controller.jpg",
    description: "12 V DC Motor Controller, Nema 17&23 Stepper Motor Controller and Heating Controller Unit.",
  },
  "stepper-heater": {
    name: "Stepper & Heater Controller",
    image: "public/images/Stepper & Heater Controller.jpg",
    description: "Stepper Motor Controller for Nema 17& 23 and Heating Controller Unit.",
  },
  "plc-stepper": {
    name: "PLC Controller For Stepper Motor",
    image: "/images/placeholder.jpg",
    description: "Advanced PLC controller designed to manage stepper motor operations with precision.",
  },
};

export default function ControlPanelProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = productDetails[id || ""];

  if (!product) return <h1 className="text-center py-20">Product Not Found</h1>;

  return (
    <div className="py-20 container mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto mb-6 w-80 h-80 object-cover rounded-lg"
      />
      <p className="text-gray-600 mb-6">{product.description}</p>
      <Button className="px-6 py-3 text-lg">Buy Now</Button>
    </div>
  );
}
