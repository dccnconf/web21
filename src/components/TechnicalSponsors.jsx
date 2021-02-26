import React from "react";


// noinspection JSUnresolvedVariable
const TechnicalSponsor = ({imgUrl}) => (
  <img src={imgUrl}
       style={{maxWidth: 212}}
       className="mr-8 mb-12 w-2/3 sm:w-1/4"
       alt={`logotype`}
  />
);


const TechnicalsSponsors = () => {
  return (
    <div className="flex flex-wrap px-4 mt-8 mb-12 items-start justify-center">
      <TechnicalSponsor imgUrl="/images/logotypes/ieee_mb.jpg"/>
      <TechnicalSponsor imgUrl="/images/logotypes/r8logo.png"/>
      <TechnicalSponsor imgUrl="/images/logotypes/ieee_rs.jpg"/>
    </div>
  );
}

export default TechnicalsSponsors;
