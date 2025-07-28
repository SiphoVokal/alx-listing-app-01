import React from "react";
import Link from "next/link";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Beachfront", "Mountain View"];

const Pill: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-blue-500 hover:text-white">
    {label}
  </button>
);

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-64 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: "url('https://example.com/hero-bg.jpg')" }}
      >
        <h1 className="text-3xl font-bold mb-2">Find your favorite place here!</h1>
        <p>The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-2 p-4 justify-center">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <Link key={property.name} href={`/property/${encodeURIComponent(property.name)}`}>
            <div className="border rounded shadow hover:shadow-lg cursor-pointer">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover rounded-t"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg">{property.name}</h2>
                <p className="text-gray-600">
                  {property.address.city}, {property.address.country}
                </p>
                <p className="text-blue-600 font-bold mt-2">ZAR {property.price}/night</p>
                <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
