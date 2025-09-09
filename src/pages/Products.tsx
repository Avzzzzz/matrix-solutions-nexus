// src/pages/Products.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import WhatsappChat from "@/components/WhatsappChat";

const productCategories = [
	{
		name: "Electrical Actuators",
		image: "/images/linear-actuator.png",
		link: "/products/linear-actuators",
	},
	{
		name: "Pneumatics",
		image: "/images/pneumatics.jpg", // Add this image in public/images/
		link: "/products/Pneumatics",
	},
	{
		name: "Control Panels",
		image: "/images/control-panel.jpg", // Add this image in public/images/
		link: "/products/control-panels",
	},
	{
		name: "Desktop CNC",
		image: "/images/cnc-machine.jpg",
		link: "/products/cnc-machines",
	},
	{
		name: "Robotics Kits",
		image: "/images/robotics-kit.jpg",
		link: "/products/robotics-kits",
	},
	{
		name: "Plastic Enclosure",
		image: "/images/plastic-enclosure.jpg",
		link: "/products/plastic-enclosure",
	},
	{
		name: "Minimal CNC",
		image: "/images/minimal-cnc.jpg",
		link: "/products/minimal-cnc",
	},
	{
		name: "Membrane Industry",
		image: "/images/membrane-industry.jpg",
		link: "/products/membrane-industry",
	},
];

const Products = () => {
	const navigate = useNavigate();

	return (
		<div className="py-20 container mx-auto px-4">
			<WhatsappChat />
			<h1 className="text-4xl font-bold mb-12 text-center">
				Our Product Categories
			</h1>

			<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{productCategories.map((category, index) => (
					<Card
						key={index}
						className="cursor-pointer hover:shadow-lg transition-shadow"
						onClick={() => navigate(category.link)}
					>
						<CardHeader className="p-0">
							<img
								src={category.image}
								alt={category.name}
								className="w-full h-48 object-cover rounded-t-lg"
							/>
						</CardHeader>
						<CardContent className="p-6">
							<CardTitle className="text-center">
								{category.name}
							</CardTitle>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Products;
