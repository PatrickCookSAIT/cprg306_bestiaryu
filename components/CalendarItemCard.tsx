import React from "react";

type CalendarItemCardProps = {
  name: string;
  type: string;
  location: string;
};

const CalendarItemCard = ({
  name,
  type,
  location,
}: CalendarItemCardProps) => {

  const typeStyle = {
    feeding: "bg-orange-100 border-orange-400",
    talk: "bg-blue-100 border-blue-400",
    enrichment: "bg-purple-100 border-purple-400",
    demonstration: "bg-green-100 border-green-400",
  }[type.toLowerCase().trim()] || "bg-gray-100 border-gray-400";

    const textStyle = {
    feeding: "text-orange-600",
    talk: "text-blue-600",
    enrichment: "text-purple-600",
    demonstration: "text-green-600",
  }[type.toLowerCase().trim()] || "text-gray-600";

  const borderStyle = {
    feeding: "border-orange-400",
    talk: "border-blue-400",
    enrichment: "border-purple-400",
    demonstration: "border-green-400",
  }[type.toLowerCase().trim()] || "border-gray-400";
  return (
    <div className={`border-l-4 bg-white rounded-lg p-4 ${borderStyle}`}>
      <div className={`border rounded-4xl w-fit mb-1 ${typeStyle}`}>
            <p className={`text-[9px] text-gray-600 py-1 px-2 ${textStyle}`}>{type}</p>
      </div>
      <h2 className="font-bold text-xs text-green-900">{name}</h2>
      
      <p className="text-[9px] text-gray-600 mt-1">{"\u{1F4CD}"}{location}</p>
    </div>
  );
};

export default CalendarItemCard;