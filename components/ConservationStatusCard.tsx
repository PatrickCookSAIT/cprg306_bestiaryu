import React from 'react'

type ConservationStatusCardProps = {
  conservationStatus: string;
  
};

const ConservationStatusCard = ({conservationStatus}: ConservationStatusCardProps) => {
  return (
    <div className="w-100 h-20 rounded-2xl bg-amber-800">
      <p>{conservationStatus}</p>
    </div>
  )
}

export default ConservationStatusCard
