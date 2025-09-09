import React, { useState } from "react";

const images = [
  "/images/minimill-main.jpg",
  "/images/minimill-optional1.jpg",
  "/images/minimill-optional2.jpg",
  "/images/minimill-optional3.jpg",
];

// Option prices
const optionPrices = {
  stepperMotors: 6597,
  motherboard: 32199,
  powerSupply: 2499,
  makitaRouter: 9600,
  interfaceTouch: 23799,
  xyzProbe: 3875,
};

const basePrice = 19999;

export default function CNCMachines() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState({
    stepperMotors: "No",
    motherboard: "No",
    powerSupply: "No",
    makitaRouter: "No",
    interfaceTouch: "No",
    xyzProbe: "No",
  });

  // Calculate total price
  const totalPrice =
    (basePrice +
      (options.stepperMotors === "Yes" ? optionPrices.stepperMotors : 0) +
      (options.motherboard === "Yes" ? optionPrices.motherboard : 0) +
      (options.powerSupply === "Yes" ? optionPrices.powerSupply : 0) +
      (options.makitaRouter === "Yes" ? optionPrices.makitaRouter : 0) +
      (options.interfaceTouch === "Yes" ? optionPrices.interfaceTouch : 0) +
      (options.xyzProbe === "Yes" ? optionPrices.xyzProbe : 0)) *
    quantity;

  const handleOptionChange = (option: string, value: string) => {
    setOptions((prev) => ({ ...prev, [option]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6 text-gray-600">
        Home / Store / CNC Machines / DIY CNC Machines
      </nav>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Images */}
        <div className="md:w-1/2">
          <img
            src={selectedImage}
            alt="MiniMill CNC Machine"
            className="w-full h-80 object-contain rounded-lg border"
          />
          <div className="flex gap-2 mt-4">
            {images.map((img) => (
              <img
                key={img}
                src={img}
                alt="MiniMill Option"
                className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                  selectedImage === img ? "border-accent" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">
            MiniMill CNC Machine (Mechanical Build)
          </h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 font-bold">5.0</span>
            <span className="text-gray-500">1 review | Ask question</span>
          </div>
          <div className="mb-2 text-gray-600">SKU 01197</div>
          <div className="text-3xl font-bold mb-2">
            ₹{totalPrice.toLocaleString()}
          </div>
          <div className="mb-2 text-green-600 font-semibold">Free Shipping</div>

          {/* Options */}
          <div className="space-y-4 mb-4">
            <div>
              <label className="font-semibold">Nema 23 Stepper Motors - 03pcs</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="stepperMotors"
                    value="Yes"
                    checked={options.stepperMotors === "Yes"}
                    onChange={() => handleOptionChange("stepperMotors", "Yes")}
                  />
                  Yes (+₹6,597.00)
                </label>
                <label>
                  <input
                    type="radio"
                    name="stepperMotors"
                    value="No"
                    checked={options.stepperMotors === "No"}
                    onChange={() => handleOptionChange("stepperMotors", "No")}
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold">Motherboard - BlackBox Motion Control System X32</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="motherboard"
                    value="Yes"
                    checked={options.motherboard === "Yes"}
                    onChange={() => handleOptionChange("motherboard", "Yes")}
                  />
                  Yes (+₹32,199.00)
                </label>
                <label>
                  <input
                    type="radio"
                    name="motherboard"
                    value="No"
                    checked={options.motherboard === "No"}
                    onChange={() => handleOptionChange("motherboard", "No")}
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold">Power Supply LRS-350-24V (Meanwell)</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="powerSupply"
                    value="Yes"
                    checked={options.powerSupply === "Yes"}
                    onChange={() => handleOptionChange("powerSupply", "Yes")}
                  />
                  Yes (+₹2,499.00)
                </label>
                <label>
                  <input
                    type="radio"
                    name="powerSupply"
                    value="No"
                    checked={options.powerSupply === "No"}
                    onChange={() => handleOptionChange("powerSupply", "No")}
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold">Makita Trim Router - RT0700C</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="makitaRouter"
                    value="Yes"
                    checked={options.makitaRouter === "Yes"}
                    onChange={() => handleOptionChange("makitaRouter", "Yes")}
                  />
                  Yes (+₹9,600.00)
                </label>
                <label>
                  <input
                    type="radio"
                    name="makitaRouter"
                    value="No"
                    checked={options.makitaRouter === "No"}
                    onChange={() => handleOptionChange("makitaRouter", "No")}
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold">Interface CNC Touch For Blackbox</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="interfaceTouch"
                    value="Yes"
                    checked={options.interfaceTouch === "Yes"}
                    onChange={() => handleOptionChange("interfaceTouch", "Yes")}
                  />
                  Yes (+₹23,799.00)
                </label>
                <label>
                  <input
                    type="radio"
                    name="interfaceTouch"
                    value="No"
                    checked={options.interfaceTouch === "No"}
                    onChange={() => handleOptionChange("interfaceTouch", "No")}
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label className="font-semibold">XYZ Corner Finding Touch Probe</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="xyzProbe"
                    value="Yes"
                    checked={options.xyzProbe === "Yes"}
                    onChange={() => handleOptionChange("xyzProbe", "Yes")}
                  />
                  Yes (+₹3,875.00)
                </label>
                <label>
                  <input
                    type="radio"
                    name="xyzProbe"
                    value="No"
                    checked={options.xyzProbe === "No"}
                    onChange={() => handleOptionChange("xyzProbe", "No")}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <span className="font-semibold">In stock</span>
          </div>
          <div className="mb-4">
            <label className="font-semibold">Quantity:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="ml-2 w-16 border rounded px-2 py-1"
            />
          </div>
          <button className="bg-accent text-white px-6 py-3 rounded font-semibold hover:bg-accent/90 transition mb-2 w-full">
            Add to Bag
          </button>
          <div className="flex gap-4 mb-4">
            <button className="border px-4 py-2 rounded hover:bg-gray-100">Save this product for later</button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">Favorite</button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">Share this product</button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-2">Product Details</h2>
        <ul className="mb-2 text-gray-700">
          <li>Brand: 3DPrintronics</li>
          <li>Color: Silver/Black</li>
          <li>Dispatch Time: 2 to 3 working days</li>
          <li>Delivery Time: 4 to 5 Working days</li>
          <li>Courier Used: Delhivery/Bluedart/Smartr</li>
          <li>GST(Tax): 18% on checkout</li>
        </ul>
        <p className="mb-4">
          <strong>MiniMill CNC Machine (Mechanical Build)</strong><br />
          The OpenBuilds Minimill is an award winning, compact CNC milling machine tailored for small-scale machining and milling tasks. With its desktop-sized dimensions, it serves as a precise 3D carving and engraving device, capable of crafting intricate engravings and stunning 3D projects. Its open design and portable nature make it an asset to any workspace.<br /><br />
          With this machine, you receive exceptional value, and it is thoughtfully designed for simplicity and usage for every skill level!<br />
          Get your Minimill today and make your concepts come to life.
        </p>
        <h3 className="font-bold mb-2">Specifications:</h3>
        <ul className="mb-4 text-gray-700">
          <li>Travel (Work Area): X Axis 4.5" (120mm) / Y Axis 7" (180mm) / Z Axis 3" (~80mm)</li>
          <li>Workable Material Height: 2.5" (~60mm) Based on a 1/2" spoiler board stack</li>
          <li>Drive System: Lead Screw Driven</li>
          <li>Machine Accuracy: 0.003"~0.005" (0.10mm~0.15mm)</li>
          <li>Footprint: 22" x 16" (560mm x 406mm)</li>
          <li>Software: INCLUDED at no additional cost - OpenBuilds CAM and CONTROL software</li>
        </ul>
        <p className="mb-4">
          <strong>Materials you can Mill/Cut/Carve & Engrave with MiniMill:</strong><br />
          Cast Acrylic, Wood Soft / Hard, Non Ferrous Metals
        </p>
        <h3 className="font-bold mb-2">What Will You Get</h3>
        <ul className="mb-4 text-gray-700">
          <li>
            If you do not select any of the Optional parts, you will receive only the MECHANICAL ASSEMBLY of the Minimill as shown in the image below.
          </li>
          <li>
            Mechanical Assembly will not include - Stepper Motors, Mother Board, Power supply, Makita Trim Router, Interface CNC Touch for Blackbox, XYZ Corner Finding Touch Probe, Wiring Harness, Power Cable, Limit Switch and any other electronic/electrical part.
          </li>
          <li>
            A fully operational Minimill will require - Stepper Motors, Mother Board, Power supply, Makita Trim Router. You can purchase these parts separately from the optional parts list.
          </li>
          <li>
            Spoiler Board (Not Included) Dimensions: 5"x5" (127mm x 127mm)
          </li>
        </ul>
        <h3 className="font-bold mb-2">Optional Parts</h3>
        <ul className="mb-4 text-gray-700">
          <li>Nema 23 Stepper Motors - 03pcs - Model 57CM23-3A (Leadshine)</li>
          <li>Motherboard - BlackBox Motion Control System X32</li>
          <li>Power Supply LRS-350-24V (Meanwell)</li>
          <li>Makita Trim Router RT-0700C</li>
          <li>Interface CNC Touch For Blackbox</li>
          <li>XYZ Corner Finding Touch Probe</li>
        </ul>
        <h3 className="font-bold mb-2">Please Note</h3>
        <ul className="mb-4 text-gray-700">
          <li>This is a basic CNC Milling machine for light production work. Operation and usage of the machine requires skill set involving CAD/CAM and machining principles.</li>
          <li>All sales are final. Machine will not be returned, refunded or exchanged under any circumstances. Please buy carefully and responsibly.</li>
          <li>CAM software is not provided with the machine. Paid CAM softwares like Fusion 360 (indl use) can be used. Other CAM software (paid) are Vectric Cut2D, Aspire Cam etc. Free CAM software which can be used - Openbuilds CAM</li>
          <li>This machine and V Slot, C Beam and all V Slot, C Beam accessories used in this machine are manufactured in India, based on opensource designs under CC by 4.0.</li>
          <li>We are not affiliated to Openbuilds or Ooznest.</li>
        </ul>
      </div>
    </div>
  );
}