import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const coffeeData = [
  {
    name: "Americano Coffee",
    chef: "Mr. Matin Paul",
    price: "890 Taka",
    image: "/images/americano.png",
  },
  {
    name: "Black Coffee",
    chef: "Mr. Nibra Sweden",
    price: "890 Taka",
    image: "/images/black.png",
  },
  {
    name: "Espresso Coffee",
    chef: "Mrs. Morisha",
    price: "890 Taka",
    image: "/images/espresso.png",
  },
  {
    name: "Cappuccino Coffee",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "/images/cappuccino.png",
  },
  {
    name: "Macchiato",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "/images/macchiato.png",
  },
  {
    name: "Decaf Coffee",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "/images/decaf.png",
  },
];

const CoffeeDashboard = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl py-3">Our Popular Products</h2>
        <button className="btn btn-outline btn-accent">Add Coffee ☕</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffeeData.map((coffee, index) => (
          <div key={index} className="flex items-center gap-6 p-4 shadow-md border border-dashed border-slate-300">
            <img
              src={coffee.image}
              alt={coffee.name}
              className="w-24 h-32 object-contain rounded"
            />
            <div className="flex-1">
              <p><strong>Name:</strong> {coffee.name}</p>
              <p><strong>Chef:</strong> {coffee.chef}</p>
              <p><strong>Price:</strong> {coffee.price}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button   className="text-yellow-600 border-yellow-400 btn">
                <Pencil size={18} />
              </button>
              <button   className="text-red-600 border-red-400 btn">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeDashboard;
