import { useState } from "react";
import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("what");

  return (
    <div>
      {/* Property Title and Location */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} ★</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Main Image */}
      <div className="mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Property Offers & Discount */}
      <div className="mt-4 flex flex-wrap gap-4 text-gray-700">
        <p><strong>Beds:</strong> {property.offers.bed}</p>
        <p><strong>Showers:</strong> {property.offers.shower}</p>
        <p><strong>Occupants:</strong> {property.offers.occupants}</p>
        {property.discount && (
          <p className="text-red-500 font-semibold">Discount: {property.discount}%</p>
        )}
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="flex space-x-6 border-b">
          <button
            onClick={() => setActiveTab("what")}
            className={`pb-2 ${
              activeTab === "what"
                ? "border-b-2 border-green-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            What we offer
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`pb-2 ${
              activeTab === "reviews"
                ? "border-b-2 border-green-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab("host")}
            className={`pb-2 ${
              activeTab === "host"
                ? "border-b-2 border-green-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            About Host
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "what" && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <ul className="flex flex-wrap gap-2 mt-2">
                {property.category.map((amenity, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 p-2 rounded-md"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <p className="text-gray-600">No reviews available yet for this property.</p>
            </div>
          )}

          {activeTab === "host" && (
            <div>
              <h2 className="text-xl font-semibold mb-2">About the host</h2>
              <p>
                Your host is a dedicated property owner committed to making your stay comfortable and
                memorable. They provide 24/7 assistance for all your needs.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
