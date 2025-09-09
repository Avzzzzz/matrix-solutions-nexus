// src/pages/ControlPanels.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsappChat from "@/components/WhatsappChat";

const controlPanelProducts = [
  {
    name: "Basic Control Panel",
    image: "/images/placeholder.jpg",
    description: "A simple and reliable control panel for small-scale automation systems. Ideal for entry-level operations.",
    link: "/control-panels/basic",
  },
  {
    name: "PLC Control Panel",
    image: "/images/placeholder.jpg",
    description: "Programmable Logic Controller panel designed for flexible and precise control over industrial processes.",
    link: "/control-panels/plc",
  },
  {
    name: "VFD Control Panel",
    image: "/images/placeholder.jpg",
    description: "Variable Frequency Drive panel for controlling motor speed and enhancing energy efficiency.",
    link: "/control-panels/vfd",
  },
];

export default function ControlPanels() {
  const navigate = useNavigate();

  return (
    <div className="py-20 container mx-auto px-4">
      <WhatsappChat />
      <h1 className="text-4xl font-bold mb-12 text-center">Control Panel Products</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {controlPanelProducts.map((product, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(product.link)}
          >
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="mb-2">{product.name}</CardTitle>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
