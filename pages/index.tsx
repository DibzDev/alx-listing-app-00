import React from 'react';
import Card from '../components/common/Card';
import { Property } from '../interfaces';

// Mock data for demonstration
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    description: 'Beautiful modern apartment with stunning city views. Perfect for couples and business travelers.',
    image: '/assets/7338ad8aeb0dd3e18b5c7cfdf094a7337ef0ce99 (1).png',
    price: 120,
    rating: 4.8,
    location: 'New York, NY',
    amenities: ['WiFi', 'Kitchen', 'Pool'],
  },
  {
    id: '2',
    title: 'Cozy Beach House',
    description: 'Relax in this cozy beach house with direct access to the beach and amazing ocean views.',
    image: '/assets/7338ad8aeb0dd3e18b5c7cfdf094a7337ef0ce99.png',
    price: 200,
    rating: 4.9,
    location: 'Miami, FL',
    amenities: ['Beach Access', 'Parking', 'Air Conditioning'],
  },
  {
    id: '3',
    title: 'Mountain Cabin Retreat',
    description: 'Escape to this peaceful mountain cabin surrounded by nature. Perfect for hiking and relaxation.',
    image: '/assets/c811f30edfff8de9c9b079139dd9782018c7e7c0.jpg',
    price: 150,
    rating: 4.7,
    location: 'Aspen, CO',
    amenities: ['Fireplace', 'Hiking', 'Hot Tub'],
  },
];

export default function Home() {
  const handleBookNow = (propertyId: string) => {
    alert(`Booking property: ${propertyId}`);
    // In a real app, you would navigate to booking page or open a modal
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">ALX Listing App</h1>
          <p className="text-gray-600">Find your perfect stay</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties</h2>
          <p className="text-gray-600">Discover amazing places to stay around the world</p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <Card
              key={property.id}
              title={property.title}
              description={property.description}
              imageUrl={property.image}
              price={property.price}
              rating={property.rating}
              location={property.location}
              onButtonClick={() => handleBookNow(property.id)}
            />
          ))}
        </div>

        {/* Empty State (for demonstration) */}
        {mockProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.
          </p>
        </div>
        
      </footer>
    </div>
  );
}