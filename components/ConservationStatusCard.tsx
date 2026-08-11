// ============================================================================
// components/ConservationStatusCard.tsx   →   reusable card that generates a species' conservation status for display
// ============================================================================
// takes in conservationStatus as a prop and generates a card based on it with colour coding to indicate relative conservation levels
// ----------------------------------------------------------------------------

import React from 'react'

type ConservationStatusCardProps = {
  conservationStatus: string;
  
};

const ConservationStatusCard = ({conservationStatus}: ConservationStatusCardProps) => {
    //using this function to determine the relative conservation status of each animal to assign text/background colours
    const relativeConservationStatus  = (conservationStatus:string) => {
        if(conservationStatus === "least concern" || conservationStatus === "near threatened")
        {
            return "safe";
        }
        else if(conservationStatus === "vulnerable" || conservationStatus === "endangered" || conservationStatus === "critically endangered")
        {
            return "endangered";
        }
        else if(conservationStatus === "extinct in wild" || conservationStatus === "extinct")
        {
            return "extinct";
        }
    }
    //translate status into a color for text and background
    const status = relativeConservationStatus(conservationStatus);
    let bgColor = "";
    let textColor = "";
    if (status === "safe") {
        bgColor = "bg-green-400";
        textColor = "text-green-800";
    } else if (status === "endangered") {
        bgColor = "bg-orange-400";
        textColor = "text-orange-700";
    } else if (status === "extinct") {
        bgColor = "bg-black";
        textColor = "text-white";
    } else {
        bgColor = "bg-gray-500";
        textColor = "text-white";
    }
  return (
    <div className={`flex w-37 h-5 rounded-2xl  align-center justify-center items-center ${bgColor}`}>
      <p className={`text-xs font-bold ${textColor}`}>{conservationStatus}</p>
    </div>
  )
}

export default ConservationStatusCard
