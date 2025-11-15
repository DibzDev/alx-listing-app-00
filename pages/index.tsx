import { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import PropertyCard from "@/components/PropertyCard";
import Pill from "@/components/Pill";

const filters = ["Top Villa", "Self Checkin", "Mountain View", "Beachfront", "Pool", "Luxury", "Pet Friendly"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("");
  const [properties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter === activeFilter ? "" : filter)}
            />
          ))}
        </div>
      </section>

      {/* Property Listing Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}