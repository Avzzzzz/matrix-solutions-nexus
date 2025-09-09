// src/pages/BasicControlPanel.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const basicPanelProducts = [
	{
		name: "DC Controller",
		image: "/images/DC controller.jpg",
		description:
			"This Controller is Compatible with any 12 V DC Motor, Supporting both forward and Reverse directions.",
		id: "dc-controller",
	},
	{
		name: "Heater Controller",
		image: "/images/Heater Controller.jpg",
		description:
			"A heating device controller with a heating capacity of up to 3000 KW, featuring an emergency control for safety.",
		id: "heater-controller",
	},
	{
		name: "Stepper & DC Controller",
		image: "/images/stepper and dc control.jpg",
		description:
			"This Controller supports 12V DC Motor Control, as well as Nema17 and Nema 23 stepper motor control.",
		id: "stepper-dc-controller",
	},
	{
		name: "DC, Stepper & Heater Controller",
		image: "/images/DC, Stepper & Heater.jpg",
		description:
			"12 V DC Motor Controller, Nema 17&23 Stepper Motor Controller and Heating Controller Unit.",
		id: "dc-stepper-heater",
	},
	{
		name: "Stepper & Heater Controller",
		image: "/images/stepper and heater.jpg",
		description:
			"Stepper Motor Controller for Nema 17& 23 and Heating Controller Unit.",
		id: "stepper-heater",
	},
	{
		name: "PLC Controller For Stepper Motor",
		image: "/images/PLC Controller For.jpg",
		description:
			"Advanced PLC controller designed to manage stepper motor operations with precision.",
		id: "plc-stepper",
	},
];

export default function BasicControlPanel() {
	const navigate = useNavigate();

	return (
		<div className="py-20 container mx-auto px-4">
			<h1 className="text-4xl font-bold mb-12 text-center">
				Basic Control Panel - Products
			</h1>

			<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{basicPanelProducts.map((product, index) => (
					<Card
						key={index}
						className="hover:shadow-lg transition-shadow cursor-pointer"
						onClick={() =>
							navigate(`/products/control-panel/${product.id}`)
						}
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
							<p className="text-gray-600 text-sm">
								{product.description}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
