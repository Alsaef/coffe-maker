import React from "react";
import { Pencil, Trash2, View } from "lucide-react";
import { Link } from "react-router";

const coffeeData = [
  {
    name: "Americano Coffee",
    chef: "Mr. Matin Paul",
    price: "890 Taka",
    image: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/2.png",
  },
  {
    name: "Black Coffee",
    chef: "Mr. Nibra Sweden",
    price: "890 Taka",
    image: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/3.png",
  },
  {
    name: "Espresso Coffee",
    chef: "Mrs. Morisha",
    price: "890 Taka",
    image: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/4.png",
  },
  {
    name: "Cappuccino Coffee",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/2.png",
  },
  {
    name: "Macchiato",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/3.png",
  },
  {
    name: "Decaf Coffee",
    chef: "Mr. Moruti",
    price: "890 Taka",
    image: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/4.png",
  },
];

const CoffeeDashboard = () => {
  return (
    <div className="p-8 mt-[100px]">
      <div className="text-center mb-6">
        <h2 className="text-3xl py-3 text-[#331A15] text-shadow-2xs">Our Popular Products</h2>
       <Link to='/add-coffe'><button className="btn btn-outline  bg-[#E3B577]">Add Coffee ☕</button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffeeData.map((coffee, index) => (
          <div key={index} className="flex items-center gap-6 p-4 shadow-md border border-dashed border-slate-300 bg-[#F5F4F1]">
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
              <button   className="text-white bg-[#D2B48C] btn">
                <View size={18} />
              </button>
              <button   className="text-white border-white btn bg-black">
                <Pencil size={18} />
              </button>
              <button   className="text-white bg-red-400 btn">
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
