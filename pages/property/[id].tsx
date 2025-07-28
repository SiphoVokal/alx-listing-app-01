import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) {
    return <p className="text-center mt-10 text-lg">Property not found</p>;
  }

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left side: Property Details */}
      <div className="md:col-span-2">
        <PropertyDetail property={property} />
      </div>

      {/* Right side: Booking Section */}
      <div className="md:col-span-1">
        <BookingSection price={property.price} discount={property.discount} />
      </div>
    </div>
  );
}