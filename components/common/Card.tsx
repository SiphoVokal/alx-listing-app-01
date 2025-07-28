import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, image, onClick }) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow cursor-pointer" onClick={onClick}>
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
