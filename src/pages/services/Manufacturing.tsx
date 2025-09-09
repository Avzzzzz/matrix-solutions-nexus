import React, { useState, useRef, useEffect } from "react";
import {
  UploadCloud,
  ClipboardCheck,
  Settings,
  Truck,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsappChat from "@/components/WhatsappChat";
import emailjs from "@emailjs/browser";

const manufacturingServicesList = [
  "CNC turning",
  "VMC",
  "Grinding",
  "Sheet metal fabrication (laser cutting, CNC bending, welding)",
  "Wire cutting/EDM",
  "3D printing/Acrylic laser cutting",
  "Machine assembly",
];

const orderingSteps = [
  {
    icon: UploadCloud,
    title: "Upload CAD file/Submit Inquiry",
    description: "Upload your design or submit inquiry details.",
  },
  {
    icon: ClipboardCheck,
    title: "Receive Instant Quote",
    description: "Configure part specifications and get an immediate quote.",
  },
  {
    icon: Settings,
    title: "Engineering Review",
    description: "Our engineers will review the design for manufacturability.",
  },
  {
    icon: Truck,
    title: "Manufacturing / Confirm Order",
    description: "We ensure parts are made to meet our high-quality standards.",
  },
  {
    icon: CheckCircle,
    title: "Payment & Delivery Scheduling",
    description: "Confirm payment, and we’ll schedule delivery at your convenience.",
  },
];

const processTabs = [
  { id: "enclosure-design", label: "Enclosure Design" },
  { id: "3d-printing", label: "3D Printing" },
  { id: "injection-molding", label: "Injection Molding" },
  { id: "sheet-metal-fabrication", label: "Sheet Metal Fabrication" },
  { id: "cnc-machining", label: "CNC Machining" },
];

export default function Manufacturing() {
  const [activeFormId, setActiveFormId] = useState<string | null>(null);
  const manufacturingProcessRef = useRef<HTMLDivElement>(null);
  const printingFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const scrollToProcess = () => {
    setActiveFormId(null);
    manufacturingProcessRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetQuoteClick = () => {
    scrollToProcess();
  };

  // Basic file input state & handler for demo
  const [fileInputs, setFileInputs] = useState<Record<string, File | null>>({});

  const handleFileChange = (formId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFileInputs((prev) => ({ ...prev, [formId]: e.target.files?.[0] || null }));
  };

  // Utility validation functions
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^\+?\d{10,15}$/.test(phone.replace(/\s/g, ""));

  // Example error state for Enclosure Design form
  const [enclosureErrors, setEnclosureErrors] = useState<{ email?: string; phone?: string }>({});

  // Forms JSX ------------------------------------------

  const enclosureDesignForm = (
    <form
      id="enclosure-design"
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
        const phone = (e.currentTarget.elements.namedItem("phone") as HTMLInputElement)?.value;
        let errors: { email?: string; phone?: string } = {};

        if (!validateEmail(email)) {
          errors.email = "Please enter a valid email address.";
        }
        if (phone && !validatePhone(phone)) {
          errors.phone = "Please enter a valid phone number.";
        }

        setEnclosureErrors(errors);

        if (Object.keys(errors).length === 0) {
          alert("Enclosure Design quote request - functionality coming soon.");
        }
      }}
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-bold mb-4">Enclosure Design</h3>
      <p className="mb-6 text-gray-700">
        Share your Enclosure Design requirements for a detailed quote.
      </p>

      {/* Product Description */}
      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Product Description</legend>
        <label className="block">
          <span className="font-semibold">Product Name</span>
          <input type="text" required className="w-full p-2 border rounded" />
        </label>

        <label className="block">
          <span className="font-semibold">Purpose of the electronic product</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>

        <label className="block">
          <span className="font-semibold">Main functionalities and features</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
      </fieldset>

      {/* Product Specifications */}
      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Product Specifications</legend>
        <div className="grid grid-cols-3 gap-4">
          <label className="block">
            <span>Length (mm)</span>
            <input type="number" className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            <span>Width (mm)</span>
            <input type="number" className="w-full p-2 border rounded" />
          </label>
          <label className="block">
            <span>Height (mm)</span>
            <input type="number" className="w-full p-2 border rounded" />
          </label>
        </div>
        <label className="block">
          <span>Operating temperature range</span>
          <input type="text" placeholder="e.g., -20°C to 60°C" className="w-full p-2 border rounded" />
        </label>
        <label className="block">
          <span>Environmental conditions (water resistance, dust resistance, etc.)</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
      </fieldset>

      {/* Mounting & Interfaces */}
      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Mounting & Placement</legend>
        <label className="block">
          <span>How will the enclosure be mounted or installed?</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
        <label className="block">
          <span>Where will the enclosure be placed?</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
      </fieldset>

      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Access & Interfaces</legend>
        <label className="block">
          <span>Connectors, buttons, displays, or other external interfaces?</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
        <label className="block">
          <span>How will the user interact with the product?</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
      </fieldset>

      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Material Preferences, Aesthetics & Branding</legend>
        <label className="block">
          <span>Preferred materials (e.g., plastic, metal, ABS, polycarbonate)</span>
          <input type="text" className="w-full p-2 border rounded" />
        </label>
        <label className="block">
          <span>Design elements, colors, branding requirements</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
      </fieldset>

      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Cooling & Ventilation</legend>
        <label className="block">
          <span>Does the product generate heat? How will it be cooled?</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
      </fieldset>

      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Protection & Safety</legend>
        <label className="block">
          <span>Safety standards or certifications (e.g., IP rating, UL, CE)</span>
          <textarea className="w-full p-2 border rounded" rows={2} />
        </label>
      </fieldset>

      <label className="block">
        <span className="font-semibold">Upload drawing</span>
        <input
          type="file"
          accept=".zip,.odt,.dwg,.step,.stp,.iges,.algprt,.pdf"
          onChange={(e) => handleFileChange("enclosure-design", e)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <p className="text-sm text-gray-500 mt-1">
          Accepted file types: zip, odt, dwg, step, stp, iges, algprt, pdf
        </p>
      </label>

      {/* Collaboration & communication */}
      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Collaboration & Communication</legend>
        <label className="block">
          <span>Name</span>
          <input type="text" className="w-full p-2 border rounded" required name="user_name" />
        </label>
        <label className="block">
          <span>Phone Number</span>
          <input type="tel" className="w-full p-2 border rounded" name="phone" />
          {enclosureErrors?.phone && (
            <span className="text-red-500 text-sm">{enclosureErrors.phone}</span>
          )}
        </label>
        <label className="block">
          <span>Email</span>
          <input type="email" className="w-full p-2 border rounded" required name="email" />
          {enclosureErrors?.email && (
            <span className="text-red-500 text-sm">{enclosureErrors.email}</span>
          )}
        </label>
      </fieldset>

      <button
        type="submit"
        className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent/90 transition w-full"
      >
        Submit Request
      </button>
    </form>
  );

  const printingForm = (
    <form
      ref={printingFormRef}
      id="3d-printing"
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_u22jlsv",
            "template_8ar0uya",
            printingFormRef.current!,
            "FGCgYRsuOVMCF72vb"
          )
          .then(
            () => alert("Request sent successfully!"),
            () => alert("Failed to send request. Please try again.")
          );
      }}
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-bold mb-4">3D Printing</h3>
      <p className="mb-6 text-gray-700">
        Share your  3D printing  project details for an instant quote.
      </p>

      

      <label className="block">
        <span className="font-semibold">Product Name</span>
        <input
          type="text"
          required
          placeholder="Enter product name"
          className="w-full border border-gray-300 rounded-md p-3"
        />
      </label>

      <label className="block">
        <span className="font-semibold">Quantity</span>
        <input
          type="number"
          min={1}
          required
          placeholder="Enter quantity"
          className="w-full border border-gray-300 rounded-md p-3"
        />
      </label>

      <label className="block">
        <span className="font-semibold">Choose Material</span>
        <select className="w-full border border-gray-300 rounded-md p-3">
          <option>ABS</option>
          <option>PTEG</option>
          <option>PLA</option>
                  </select>
      </label>

           

      

     
      <label className="block">
        <span className="font-semibold">Upload 3D Model</span>
        <input
          type="file"
          accept=".tiff,.png,.jpeg,.jpg,.pdf"
          onChange={(e) => handleFileChange("3d-printing-print", e)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <p className="text-sm text-gray-500 mt-1">
          File types: .tiff, .png, .jpeg, .jpg, .pdf
        </p>
      </label>

      {/* Collaboration & communication */}
      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Collaboration & Communication</legend>
        <label className="block">
          <span>Name</span>
          <input type="text" className="w-full p-2 border rounded" required name="user_name" />
        </label>
        <label className="block">
          <span>Phone Number</span>
          <input type="tel" className="w-full p-2 border rounded" name="phone" />
          {enclosureErrors.phone && (
            <span className="text-red-500 text-sm">{enclosureErrors.phone}</span>
          )}
        </label>
        <label className="block">
          <span>Email</span>
          <input type="email" className="w-full p-2 border rounded" required name="email" />
          {enclosureErrors.email && (
            <span className="text-red-500 text-sm">{enclosureErrors.email}</span>
          )}
        </label>
      </fieldset>


      <button
        type="submit"
        className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent/90 transition w-full"
      >
        Submit Request
      </button>
    </form>
  );

  const injectionMoldingForm = (
    <form
      id="injection-molding"
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Injection Molding quote request - functionality coming soon.");
      }}
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-bold mb-4">Injection Molding</h3>
      <p className="mb-6 text-gray-700">
        Share your injection molding/Sheet Metal/CNC project specifications for a detailed quote.
      </p>

      <label className="block">
        <span className="font-semibold">Product Name</span>
        <input type="text" required className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Quantity</span>
        <input type="number" min={1} required className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Choose Material</span>
        <select className="w-full p-3 border rounded">
          <option>ABS</option>
          <option>PLA</option>
          <option>Polypropylene</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block">
        <span className="font-semibold">Number of Cavities</span>
        <input type="number" min={1} className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Runner</span>
        <select className="w-full p-3 border rounded">
          <option>Hot</option>
          <option>Cold</option>
        </select>
      </label>

      <div className="grid grid-cols-3 gap-4">
        <label className="block">
          <span className="font-semibold">Mold Length (mm)</span>
          <input type="number" className="w-full p-3 border rounded" />
        </label>
        <label className="block">
          <span className="font-semibold">Mold Width (mm)</span>
          <input type="number" className="w-full p-3 border rounded" />
        </label>
        <label className="block">
          <span className="font-semibold">Mold Height (mm)</span>
          <input type="number" className="w-full p-3 border rounded" />
        </label>
      </div>

      <label className="block">
        <span className="font-semibold">Size of the Article</span>
        <input type="text" className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Weight of the Article</span>
        <input type="text" className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Drop a 3D model/Pdf of Article</span>
        <input
          type="file"
          accept=".zip,.dxf,.dwg,.step,.stp,.iges,.sldprt,.pdf"
          onChange={(e) => handleFileChange("injection-molding", e)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <p className="text-sm text-gray-500 mt-1">
          File types: .zip, .dxf, .dwg, .step, .stp, .iges, .sldprt, .pdf
        </p>
      </label>

      
      <label className="block">
        <span className="font-semibold">Additional Notes</span>
        <textarea className="w-full p-3 border rounded" rows={3}></textarea>
      </label>

      {/* Collaboration & communication */}
      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Collaboration & Communication</legend>
        <label className="block">
          <span>Name</span>
          <input type="text" className="w-full p-2 border rounded" required name="user_name" />
        </label>
        <label className="block">
          <span>Phone Number</span>
          <input type="tel" className="w-full p-2 border rounded" name="phone" />
          {enclosureErrors.phone && (
            <span className="text-red-500 text-sm">{enclosureErrors.phone}</span>
          )}
        </label>
        <label className="block">
          <span>Email</span>
          <input type="email" className="w-full p-2 border rounded" required name="email" />
          {enclosureErrors.email && (
            <span className="text-red-500 text-sm">{enclosureErrors.email}</span>
          )}
        </label>
      </fieldset>


      <button
        type="submit"
        className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent/90 transition w-full"
      >
        Submit Request
      </button>
    </form>
  );

  // State for Sheet Metal Material selection
  const [selectedMaterial, setSelectedMaterial] = useState<string>("Aluminium");
  const [thicknessLimits, setThicknessLimits] = useState({ min: 0.5, max: 10 });
  const [thickness, setThickness] = useState("");
  const [isThicknessValid, setIsThicknessValid] = useState(true);

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedMaterial(value);

    switch (value) {
      case "Aluminium":
        setThicknessLimits({ min: 0.5, max: 10 });
        break;
      case "Stainless Steel":
        setThicknessLimits({ min: 0.5, max: 15 });
        break;
      case "Mild Steel":
        setThicknessLimits({ min: 0.5, max: 22 });
        break;
      case "Copper":
        setThicknessLimits({ min: 0.5, max: 3 });
        break;
      case "Brass":
        setThicknessLimits({ min: 0.5, max: 3 });
        break;
      case "Titanium":
        setThicknessLimits({ min: 0.5, max: 10 });
        break;
      default:
        setThicknessLimits({ min: 0.5, max: 10 });
    }
    setThickness(""); // Reset thickness on material change
    setIsThicknessValid(true);
  };

  const handleThicknessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setThickness(value);

    const num = parseFloat(value);
    if (
      value === "" ||
      isNaN(num) ||
      num < thicknessLimits.min ||
      num > thicknessLimits.max
    ) {
      setIsThicknessValid(false);
    } else {
      setIsThicknessValid(true);
    }
  };

  const sheetMetalForm = (
    <form
      id="sheet-metal-fabrication"
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Sheet Metal Fabrication quote request - functionality coming soon.");
      }}
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-bold mb-4">Sheet Metal Fabrication</h3>
      <p className="mb-6 text-gray-700">
        Share your Sheet Metal Fabrication project details for an instant quote.
      </p>

      <label className="block">
        <span className="font-semibold">Product Name</span>
        <input type="text" required className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Quantity</span>
        <input type="number" min={1} required className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Material</span>
        <select
          className="w-full p-3 border rounded"
          value={selectedMaterial}
          onChange={handleMaterialChange}
        >
          <option>Aluminium</option>
          <option>Stainless Steel</option>
          <option>Mild Steel</option>
          <option>Copper</option>
          <option>Brass</option>
          <option>Titanium</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block">
        <span className="font-semibold">Thickness (mm)</span>
        <input
          type="number"
          min={thicknessLimits.min}
          max={thicknessLimits.max}
          step={0.1}
          value={thickness}
          onChange={handleThicknessChange}
          placeholder={`Enter thickness (${thicknessLimits.min} - ${thicknessLimits.max} mm)`}
          className={`w-full p-2 border rounded ${!isThicknessValid && thickness ? "border-red-500" : ""}`}
          required
        />
        {!isThicknessValid && thickness && (
          <span className="text-red-500 text-sm">
            Value must be between {thicknessLimits.min} and {thicknessLimits.max} mm
          </span>
        )}
      </label>

      <fieldset className="border border-gray-300 rounded p-4 space-y-2">
        <legend className="font-semibold text-lg">Additional Operations</legend>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="bending" className="accent-accent" />
          <span>Bending</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="welding" className="accent-accent" />
          <span>Welding</span>
        </label>
      </fieldset>
      <label className="block">
        <span className="font-semibold">Surface Finish</span>
        <select className="w-full p-3 border rounded">
          <option>Powder Coating</option>
          <option>Anodizing</option>
          <option>Electrolysis Nickel Plating (ENP)</option>
          <option>Galvanizing (Zinc Plating)</option>
          <option>Blackening</option>
          <option>Chrome Plating</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block">
        <span className="font-semibold">Upload Technical File</span>
        <input
          type="file"
          accept=".zip,.dxf,.dwg,.step,.stp,.iges,.sldprt,.pdf,.jpg,.png"
          onChange={(e) => handleFileChange("sheet-metal-fabrication", e)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <p className="text-sm text-gray-500 mt-1">
          File types: .zip, .dxf, .dwg, .step, .stp, .iges, .sldprt, .pdf, .jpg, .png
        </p>
      </label>
{/* Collaboration & communication */}
      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Collaboration & Communication</legend>
        <label className="block">
          <span>Name</span>
          <input type="text" className="w-full p-2 border rounded" required name="user_name" />
        </label>
        <label className="block">
          <span>Phone Number</span>
          <input type="tel" className="w-full p-2 border rounded" name="phone" />
          {enclosureErrors.phone && (
            <span className="text-red-500 text-sm">{enclosureErrors.phone}</span>
          )}
        </label>
        <label className="block">
          <span>Email</span>
          <input type="email" className="w-full p-2 border rounded" required name="email" />
          {enclosureErrors.email && (
            <span className="text-red-500 text-sm">{enclosureErrors.email}</span>
          )}
        </label>
      </fieldset>

      <button
        type="submit"
        className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent/90 transition w-full"
      >
        Submit Request
      </button>
    </form>
  );

  const cncMachiningForm = (
    <form
      id="cnc-machining"
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        alert("CNC Machining quote request - functionality coming soon.");
      }}
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-bold mb-4">Machining</h3>
      <p className="mb-6 text-gray-700">
        Share your CNC project specifications for a detailed quote.
      </p>

      <label className="block">
        <span className="font-semibold">Product Name</span>
        <input type="text" required className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Quantity</span>
        <input type="number" min={1} required className="w-full p-3 border rounded" />
      </label>

      <label className="block">
        <span className="font-semibold">Material</span>
        <select className="w-full p-3 border rounded">
          <option>Aluminium</option>
          <option>Stainless Steel</option>
          <option>Mild Steel</option>
          <option>Copper</option>
          <option>Brass</option>
          <option>Titanium</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block">
        <span className="font-semibold">Upload Technical File</span>
        <input
          type="file"
          accept=".zip,.dxf,.dwg,.step,.stp,.iges,.sldprt,.pdf"
          onChange={(e) => handleFileChange("cnc-machining", e)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        <p className="text-sm text-gray-500 mt-1">
          File types: .zip, .dxf, .dwg, .step, .stp, .iges, .sldprt, .pdf
        </p>
      </label>

      
      {/* Collaboration & communication */}
      <fieldset className="border border-gray-300 rounded p-4 space-y-4">
        <legend className="font-semibold text-lg">Collaboration & Communication</legend>
        <label className="block">
          <span>Name</span>
          <input type="text" className="w-full p-2 border rounded" required name="user_name" />
        </label>
        <label className="block">
          <span>Phone Number</span>
          <input type="tel" className="w-full p-2 border rounded" name="phone" />
          {enclosureErrors.phone && (
            <span className="text-red-500 text-sm">{enclosureErrors.phone}</span>
          )}
        </label>
        <label className="block">
          <span>Email</span>
          <input type="email" className="w-full p-2 border rounded" required name="email" />
          {enclosureErrors.email && (
            <span className="text-red-500 text-sm">{enclosureErrors.email}</span>
          )}
        </label>
      </fieldset>


      <button
        type="submit"
        className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent/90 transition w-full"
      >
        Submit Request
      </button>
    </form>
  );

  // UI & JSX ----------------------------------------------------

  return (
    <div className="font-sans text-gray-900 bg-white">
      <WhatsappChat />
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: `url('/images/manufacturing.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-5xl font-extrabold mb-4" data-aos="fade-down">
          Manufacturing Service
        </h1>
        <p
          className="relative z-10 max-w-xl text-lg mb-8 px-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Delivering precise and reliable manufacturing solutions tailored to your needs.
        </p>
        <button
          onClick={handleGetQuoteClick}
          className="relative z-10 px-8 py-3 bg-accent hover:bg-accent/90 rounded-lg font-semibold transition shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Get a Quote
        </button>
      </section>

      {/* About Manufacturing Section */}
      <section className="max-w-6xl mx-auto px-6 py-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-center">Manufacturing Service</h2>
        <p className="max-w-3xl mx-auto text-center mb-8">
          We provide a wide range of manufacturing services that cover the entire spectrum of precision and quality.
        </p>
        <ul className="max-w-md mx-auto list-disc list-inside space-y-3 text-lg">
          {manufacturingServicesList.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Ordering Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">
            <span className="block text-blue-700 text-base font-semibold tracking-widest mb-2">FROM QUOTE TO DELIVERY</span>
            Ordering Process
          </h2>
          {/* Timeline Line */}
          <div className="relative flex items-center justify-between mb-16" style={{height: '60px'}}>
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-blue-700" style={{zIndex: 0}} />
            {orderingSteps.map((_, idx) => (
              <div key={idx} className="relative flex flex-col items-center z-10 w-1/5">
                <div className="w-4 h-4 bg-blue-700 rounded-full border-2 border-white shadow" />
                {/* Arrow for all steps including last */}
                <span className="absolute top-6 left-1/2 transform -translate-x-1/2 text-blue-700 text-2xl">&#8595;</span>
              </div>
            ))}
          </div>
          {/* Steps */}
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
            {orderingSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between bg-white rounded-xl border border-gray-200 p-8 text-left shadow transition hover:shadow-lg w-full md:w-1/5 min-w-[200px] max-w-xs mx-auto"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div>
                  <h3 className="font-bold text-lg mb-2 text-blue-700">{step.title}</h3>
                  <p className="text-gray-700 mb-6">{step.description}</p>
                </div>
                <div className="flex justify-end items-end">
                  <step.icon className="w-12 h-12 text-blue-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section
        ref={manufacturingProcessRef}
        className="max-w-6xl mx-auto px-6 py-16"
        id="manufacturing-process"
      >
        <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">
          Select Manufacturing Process
        </h2>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {processTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFormId(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-shadow shadow-md hover:shadow-lg ${
                activeFormId === tab.id
                  ? "bg-accent text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-accent/80 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Forms */}
        {activeFormId === "enclosure-design" && enclosureDesignForm}
        {activeFormId === "3d-printing" && printingForm}
        {activeFormId === "injection-molding" && injectionMoldingForm}
        {activeFormId === "sheet-metal-fabrication" && sheetMetalForm}
        {activeFormId === "cnc-machining" && cncMachiningForm}
      </section>
    </div>
  );
}

/*
.animate-bounce-x {
  animation: bounceX 1.2s infinite;
}
@keyframes bounceX {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}
*/



const PrintingForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u22jlsv",         // Service ID
        "template_8ar0uya",        // Template ID
        formRef.current!,          // Form reference
        "FGCgYRsuOVMCF72vb"        // Public key
      )
      .then(
        (result) => {
          alert("Request sent successfully!");
        },
        (error) => {
          alert("Failed to send request. Please try again.");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* Your form fields here, e.g.: */}
      <input type="text" name="user_name" placeholder="Name" required />
      <input type="email" name="user_email" placeholder="Email" required />
      <textarea name="message" placeholder="Your requirements" required />
      {/* Add other fields as needed */}
      <button type="submit" className="bg-accent text-white px-6 py-3 rounded-md font-semibold hover:bg-accent/90 transition w-full">
        Submit
      </button>
    </form>
  );
};

export { PrintingForm };
