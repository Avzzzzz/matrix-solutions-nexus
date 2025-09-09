// src/data/productData.ts
export type ProductOption = {
  name: string;
  choices: { label: string; price: number }[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  images: string[];
  description: string;
  freeShipping?: boolean;
  options?: ProductOption[];
};

export const products: Product[] = [
  {
    id: "la-10mm",
    name: "Ball Screw Linear Actuator - 10mm (Pitch)",
    
    price: 14859,
    currency: "₹",
    freeShipping: true,
    images: [
      "/images/linear-actuators/ball-screw-10mm.jpg",
      "/images/linear-actuators/ball-screw-10mm-2.jpg",
      "/images/linear-actuators/ball-screw-10mm-3.jpg",
    ],
    description: `
Upgrade your automation systems with our precision ballscrew linear actuator, engineered for performance and reliability. Ideal for applications requiring precise linear motion, our actuator combines robust construction with smooth operation to deliver superior results.

Applications:
- CNC Machinery: Enhances precision in milling, drilling, and machining.
- Automation Systems: Ideal for robotics and conveyor systems.
- Medical Devices: Reliable and accurate motion control.
- Laboratory Equipment: Precise movement for research setups.
- Camera Sliders.

Key Features:
- Precision Ball Screw: Minimal backlash, accurate positioning.
- Durable Construction: Hardened steel & aluminum for longevity.
- Smooth Operation: High-efficiency bearings, low maintenance.
- Versatile Mounting: Fits various applications.
- Customizable Stroke Length: 200mm, 500mm, 1000mm.
- Load Capacity: Horizontal 45kg, Vertical 25kg.

Technical Specs:
- Ballscrew Dia: 16mm
- Pitch: 10mm
- Guide Rail: HGH15
- Repeat Accuracy: ±0.04mm
- Max Speed: 6300mm/min (105mm/sec)
- Weight: 3.636kg (200mm w/ motor) to 6.8kg (1000mm w/ motor)
`,
    options: [
      {
        name: "Stroke Length",
        choices: [
          { label: "200mm", price: 0 },
          { label: "500mm", price: 0 },
          { label: "1000mm", price: 0 },
        ],
      },
      {
        name: "Stepper Motor",
        choices: [
          { label: "No", price: 0 },
          { label: "Yes", price: 2199 },
        ],
      },
     
     
      
      
      {
        name: "PLC Panel",
        choices: [
          { label: "No", price: 0 },
          { label: "Yes Without button", price: 95 },
          { label: "with plc button", price: 460 },
          
        ],
      },
    ],
  },
 {
  id: "la-5mm",
  name: "Ball Screw Linear Actuator - 5mm (Pitch)",
  
  price: 21745,
  currency: "₹",
  freeShipping: true,
  images: [
    "/images/linear-actuators/ball-screw-5mm.jpg",
    "/images/linear-actuators/ball-screw-5mm-2.jpg",
    "/images/linear-actuators/ball-screw-5mm-3.jpg",
  ],
  description: `
Upgrade your automation systems with our precision ballscrew linear actuator, engineered for performance and reliability. Ideal for applications requiring precise linear motion, our actuator combines robust construction with smooth operation to deliver superior results in both industrial and commercial settings.

Applications:
- CNC Machinery: Enhances precision in milling, drilling, and other machining processes.
- Automation Systems: Ideal for robotics, conveyor systems, and other automated applications.
- Medical Devices: Provides reliable and accurate motion control in medical equipment.
- Laboratory Equipment: Ensures precise movements in scientific and research apparatus.
- Camera Sliders.

Key Features:
- Precision Ball Screw: Provides accurate and repeatable linear motion with minimal backlash, ensuring precise positioning and control.
- Durable Construction: Made from high-quality materials, including hardened steel and aluminum, for long-lasting performance even in demanding environments.
- Smooth Operation: Designed with high-efficiency bearings and lubricated ballscrew for smooth, quiet, and low-maintenance operation.
- Versatile Mounting Options: Features a variety of mounting configurations to fit different application needs and machine designs.
- Customizable Stroke Length: Available in multiple stroke lengths to accommodate a range of applications and requirements.
- Load Capacity: Capable of handling heavy loads while maintaining accuracy and performance.

Technical Specifications:
- Ballscrew Used Diameter: 16mm
- Ballscrew Pitch (Lead): 5mm
- Linear Guiderail Used: HGH15
- Repeatable Positioning Accuracy: ±0.04mm
- Max Speed for 5mm pitch: 5700mm per min (95mm per sec)
- Max Weight Capacity: Horizontal 50kg, Vertical 30kg
- Effective Stroke Length/Travel Length Available: 200mm, 500mm, 1000mm
- Weight of Actuator:
  Stroke Length | Weight With Motor | Weight Without Motor
  200mm         | 3.636kg           | 2.636kg
  500mm         | 4.826kg           | 3.826kg
  1000mm        | 6.800kg           | 5.800kg

Weight of Nema 23 Stepper Motor: Approx. 1 kg
  `,
  options: [
    {
      name: "Stroke Length",
      choices: [
        { label: "200mm", price: 0 },
        { label: "500mm", price: 0 },
        { label: "1000mm", price: 0 },
      ],
    },
    {
      name: "Nema 23 Stepper Motor",
      choices: [
        { label: "No", price: 0 },
        { label: "Yes (+₹2,199.00)", price: 2199 },
      ],
    },
    {
      name: "PLC Panel",
      choices: [
        { label: "No", price: 0 },
        { label: "Yes Without button", price: 95 },
        { label: "with plc button", price: 460 },
      ],
    },
    
  ],
},
  {
  id: "la-vslot-nema23",
  name: "Linear Actuator (Belt Driven)",
  
  price: 3999,
  currency: "₹",
  freeShipping: true,
  images: [
    "/images/vslot-nema23-1.jpg",
    "/images/vslot-nema23-2.jpg",
  ],
  description: `
V Slot NEMA 23 Linear Actuator (Belt Driven)

Precise | Affordable | Modular | Open Source

Made and Supported in India

Shipped as fully assembled with Nema 23 Stepper Motor

Description:

The V Slot NEMA 23 Linear Actuator (Belt Driven) is a great component in any linear system.

This is a very stable, precise, modular and affordable linear actuator which can be used for automation, DIY CNC/3D Printers and other cool stuff.

Take advantage of this amazingly affordable linear motion system today!

It can be easily integrated into any existing system or any new design due to the inherent modularity of the V Slot system.

Specifications:

- Travel Distance - 250mm is 107mm, 500mm is 345mm, 1000mm is 845mm, 1500mm is 1190mm, 2000mm is 1845mm
- Accuracy - 0.10 mm ~ 0.20 mm
- Positioning Accuracy - ~ 0.565mm
- Max Speed - ~8000 mm/min
- Belt Drive - GT2 Timing Belt (5mm width), 2mm pitch.
- Stepper Motor - Nema 23 (Leadshine 57CM23 3A, 23kg/cm torque).
- Aluminium Extrusion Used - 2040 V Slot anodized.
- Gantry Plate Used - V Slot 20mm gantry plate (Black anodized), Material - aluminium, Thickness - 3mm.
- Horizontal Load Capacity : Maximum 8 kgs
- Vertical Load Capacity : Maximum 5 to 6 kgs

Optional Items:

- Length - What length of the actuator you need. Please note it is the total length of the actuator. Travel length/stroke length has been given in the specifications section.
- Stepper Driver - it is required for operating the stepper motor. We offer DM54E stepper driver from Leadshine.
- Power Supply - We offer Meanwell LRS 350-24 power supply.
- Cable For Motor - High quality, 4 core, shielded cable for extending stepper motor cables.
`,
  options: [
    {
      name: "Total Length",
      choices: [
        { label: "250 mm", price: 3999 },
        { label: "500 mm", price: 4499 },
        { label: "1000 mm", price: 5199 },
        { label: "1500 mm", price: 5999 },
        { label: "2000 mm", price: 6999 },
      ],
    },
    {
      name: "Stepper Driver",
      choices: [
        { label: "No", price: 0 },
        { label: "Yes", price: 2649 },
      ],
    },
    {
      name: "Power supply",
      choices: [
        { label: "No", price: 0 },
        { label: "Yes", price: 2449 },
      ],
    },
    {
      name: "Cable for motor",
      choices: [
        { label: "No", price: 0 },
        { label: "1 mtr", price: 99 },
        { label: "2 mtr", price: 198 },
        { label: "5 mtr", price: 495 },
      ],
    },
  ],
},



{
  id: "la-vslot-nema17-lead-screw",
  name: "Linear Actuator (Lead Screw)",
  
  price: 4391,
  currency: "₹",
  freeShipping: true,
  images: [
    "/images/linear-actuators/vslot-nema17-lead-screw-1.jpg",
    "/images/linear-actuators/vslot-nema17-lead-screw-2.jpg",
    "/images/linear-actuators/vslot-nema17-lead-screw-3.jpg",
  ],
  description: `
The V Slot NEMA 17 Linear Actuator (Lead Screw) is a great component in any linear system.

This is a very stable, precise, modular and affordable linear actuator which can be used for automation, DIY CNC/3D Printers and other cool stuff.

Take advantage of this amazingly affordable linear motion system today!

It can be easily integrated into any existing system or any new design due to the inherent modularity of the V Slot system.

---

Specifications

- Travel Distance: 250mm is 150mm, 500mm is 400mm, 1000mm is 900mm, 1500mm is 1400mm
- Accuracy: 0.10 mm ~ 0.20 mm
- Positioning Accuracy: ~0.075mm
- Max Speed: ~3000 mm/min
- Drive: 8mm acme lead screw Tr8x8, 2mm pitch, 4 start, 8mm dia, material : SS
- Stepper Motor: Nema 17 Stepper Motor (Leadshine 42CM08, 0.8Nm Holding Torque)
- Aluminium Extrusion Used: 2060 V Slot anodized
- Gantry Plate Used: V Slot Universal Gantry Plate, material: aluminium (anodized), thickness: 3mm
- Horizontal Load Capacity: Maximum 7 to 8 kgs
- Vertical Load Capacity: Maximum 5 to 6 kgs

---

Optional Items

- Length: Total length of the actuator. Travel length/stroke length detailed in specifications.
- Stepper Driver: Required for operating the stepper motor. Compatible with DM54E Leadshine stepper driver or others matching motor specs.
- Power Supply: Required for motherboard, stepper driver and motor. Meanwell LRS 350-24 (24VDC, 350W, 14A) recommended.
- Openbuilds BlackBox Motion Control System X32: Plug & play controller for 3-axis systems with built-in drivers.
- Cable For Motor: High quality 4-core shielded cables to minimize electromagnetic interference.
  `,
  options: [
    {
      name: "Total Length",
      choices: [
        { label: "250 mm", price: 4391 },
        { label: "500 mm", price: 4831 },
        { label: "1000 mm", price: 6646 },
        { label: "1500 mm", price: 8599 },
      ],
    },
    {
      name: "Stepper Driver",
      choices: [
        { label: "No", price: 0 },
        { label: "Yes", price: 2649 },
      ],
    },
    {
      name: "Power Supply",
      choices: [
        { label: "No", price: 0 },
        { label: "Yes", price: 2449 },
      ],
    },
    {
      name: "Cable for motor",
      choices: [
        { label: "No", price: 0 },
        { label: "1 mtr", price: 99 },
        { label: "2 mtr", price: 198 },
        { label: "5 mtr", price: 495 },
      ],
    },
  ],
},


];
