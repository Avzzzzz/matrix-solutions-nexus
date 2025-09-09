// src/pages/ProductDetail.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/productData";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import WhatsappChat from "@/components/WhatsappChat";
import { Input } from "@/components/ui/input";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const [mainImage, setMainImage] = useState(product?.images[0] || "");
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  const [strokeLength, setStrokeLength] = useState<string>("");

  if (!product) {
    return <div className="py-20 text-center text-xl">Product not found</div>;
  }

  // Calculate total price (base price + extras)
  const totalPrice =
    product.price +
    Object.values(selectedOptions).reduce((sum, val) => sum + val, 0);

  const handleOptionChange = (optionName: string, extraPrice: number) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: extraPrice }));
  };

  const handleStrokeLengthChange = (value: string) => {
    // Always set as string so user can type
    setStrokeLength(value);

    const num = Number(value);
    if (value && num >= 100 && num <= 1000) {
      setSelectedOptions((prev) => ({ ...prev, ["Stroke Length"]: 0 }));
    }
  };

  return (
    <div className="py-20 container mx-auto px-4">
      <WhatsappChat />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Images */}
        <div>
          <div
            className="border rounded-lg overflow-hidden cursor-zoom-in"
            onClick={() => setIsZoomOpen(true)}
          >
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[400px] object-contain"
            />
          </div>

          <div className="flex gap-3 mt-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-contain border rounded-lg cursor-pointer transition 
                  ${mainImage === img ? "border-blue-500" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-2xl font-semibold mt-4">
            {product.currency}
            {totalPrice.toLocaleString("en-IN")}
          </p>
          {product.freeShipping && (
            <p className="text-green-600 mt-1">Free Shipping</p>
          )}

          {/* Options */}
          {product.options?.map((opt, idx) => {
            // Stroke Length → input box
            if (opt.name.toLowerCase().includes("stroke length")) {
              return (
                <div key={idx} className="mt-6">
                  <p className="font-semibold">{opt.name} (100mm - 1000mm)</p>
                  <div className="mt-2">
                    <Input
                      type="number"
                      min={100}
                      max={1000}
                      value={strokeLength}
                      placeholder="Enter stroke length"
                      onChange={(e) => handleStrokeLengthChange(e.target.value)}
                    />
                  </div>
                </div>
              );
            }

            // Stepper Motor → fixed 3 options
            if (opt.name.toLowerCase().includes("stepper motor")) {
              const stepperChoices = [
                { label: "No", price: 0 },
                { label: "NEMA17", price: 1500 },
                { label: "NEMA23", price: 2500 },
              ];
              return (
                <div key={idx} className="mt-6">
                  <p className="font-semibold">{opt.name}</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {stepperChoices.map((choice, cIdx) => (
                      <label key={cIdx} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={opt.name}
                          onChange={() =>
                            handleOptionChange(opt.name, choice.price)
                          }
                        />
                        <span>
                          {choice.label}
                          {choice.price > 0 &&
                            ` (+${product.currency}${choice.price})`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            }

            // Control Panel → fixed 3 options
            if (opt.name.toLowerCase().includes("control panel")) {
              const controlChoices = [
                { label: "No", price: 0 },
                { label: "With Button", price: 1200 },
                { label: "PLC Programming Button", price: 3500 },
              ];
              return (
                <div key={idx} className="mt-6">
                  <p className="font-semibold">{opt.name}</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {controlChoices.map((choice, cIdx) => (
                      <label key={cIdx} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={opt.name}
                          onChange={() =>
                            handleOptionChange(opt.name, choice.price)
                          }
                        />
                        <span>
                          {choice.label}
                          {choice.price > 0 &&
                            ` (+${product.currency}${choice.price})`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              );
            }

            // Default → render as before
            return (
              <div key={idx} className="mt-6">
                <p className="font-semibold">{opt.name}</p>
                <div className="flex flex-wrap gap-4 mt-2">
                  {opt.choices.map((choice, cIdx) => (
                    <label key={cIdx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={opt.name}
                        onChange={() =>
                          handleOptionChange(opt.name, choice.price)
                        }
                      />
                      <span>
                        {choice.label}
                        {choice.price > 0 &&
                          ` (+${product.currency}${choice.price})`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-2 whitespace-pre-line">{product.description}</p>
          </div>

          <Button
            className="mt-8 w-full"
            disabled={
              !strokeLength || Number(strokeLength) < 100 || Number(strokeLength) > 1000
            }
          >
            SUBMIT
          </Button>
        </div>
      </div>

      {/* Zoom Modal */}
      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <div className="flex justify-center items-center h-full bg-black"></div>
      </Dialog>
    </div>
  );
}
