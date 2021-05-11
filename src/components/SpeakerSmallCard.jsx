import React from "react";

const SpeakerSmallCard = ({ speaker, className = "font-medium text-gray-700" } = {}) => (
  <div className={className}>
    <div className="flex items-center">
      <img src={speaker.avatar} alt="" className="w-6 h-6 rounded-full mr-2"/>
      <div>
        <span className="mr-2">{speaker.appeal} {speaker.name}</span>
        (<span className="">{speaker.country}</span>)
      </div>
    </div>
  </div>
);

export default SpeakerSmallCard;
