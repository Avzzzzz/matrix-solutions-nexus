// src/pages/LinearActuators.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/productData"; // make sure productData.ts exports { products }
import WhatsappChat from "@/components/WhatsappChat";

export default function LinearActuators() {
  const navigate = useNavigate();

  // Filter only products whose ID starts with "la" (linear actuator)
  const actuators = products.filter((p) => p.id.startsWith("la"));

  return (
    <div className="font-sans py-20 container mx-auto px-4">
      <WhatsappChat />
      <h1 className="text-4xl font-bold mb-12 text-center">Linear Actuators</h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {actuators.map((item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
          >
            <CardHeader className="p-0">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle>{item.name}</CardTitle>
              
              <p className="text-lg font-semibold">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
              <Button
                className="mt-4 w-full"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
