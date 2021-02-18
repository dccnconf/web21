import React from "react";

const ContactUs = ({className = ""} = {}) => (
  <div className={className}>
    <div className="flex flex-col md:flex-row items-center">
      <img
        src="/images/undraw_envelope_n8lc.svg"
        alt="Undraw guy with an envolope"
        className="w-32 md:w-48 mb-8 md:mb-0 md:mr-8"
      />
      <div>
        <p className="text-gray-800 text-xl text-center md:text-left px-4 md:px-0">
          If you have any questions, please write us:
          <br />
          <a href="mailto:org@dccn.ru" className="text-blue-600 hover:underline">org@dccn.ru</a>.
        </p>
      </div>
    </div>
  </div>
);

export default ContactUs;
