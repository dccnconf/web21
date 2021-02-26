import React from "react";

const TechnicalSponsor = ({imgUrl}) => (
  <img src={imgUrl}
       style={{maxWidth: 212}}
       className="sm:mr-12 mr-4 mb-12 w-2/3 sm:w-1/4"
       alt={`logotype`}
  />
);

const TechnicalsSponsors = () => {
  return (
    <div>
      <p className="md:leading-7 md:text-xl mt-6 text-center mx-auto text-gray-700 w-1/1 sm:w-3/4">
        DCCN 2021 is an IEEE (Russia Section) technically co-sponsored (approved) International Conference.
      </p>
      <div className="flex flex-wrap px-4 mt-8 mb-12 items-start justify-center">
        <TechnicalSponsor imgUrl="/images/logotypes/ieee-logo.png"/>
        <TechnicalSponsor imgUrl="/images/logotypes/russia-section.png"/>
      </div>
    </div>
  );
}

export default TechnicalsSponsors;
