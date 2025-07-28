import { useState } from "react";
import { CONFIG, UI_TEXT } from "@/constants";

interface BookingSectionProps {
  price: number;
  discount?: string; // percentage as string e.g. "20"
}

const BookingSection: React.FC<BookingSectionProps> = ({ price, discount }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const nightlyRate = discount ? price * (1 - parseFloat(discount) / 100) : price;

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.max(1, (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nightlyRate * nights;
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20">
      <h3 className="text-xl font-semibold">
        {CONFIG.currency} {nightlyRate.toFixed(2)}/night
      </h3>
      {discount && (
        <p className="text-sm text-red-500 mt-1">Discount applied: {discount}% off</p>
      )}

      <div className="mt-4">
        <label className="block">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="block">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <p>
          Total payment:{" "}
          <strong>
            {CONFIG.currency} {calculateTotal().toFixed(2)}
          </strong>
        </p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        {UI_TEXT.bookNow}
      </button>
    </div>
  );
};

export default BookingSection;
