import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";

export default function Hero () {
  return (
    <main className="mt-10 mb-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex">
      <div className="sm:text-center lg:text-left lg:w-3/4">
        <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
          Welcome to the 24th International Conference on
        </p>
        <h2
          className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Distributed Computer and Communication Networks:
          <br/>
          <span className="text-indigo-600">Control, Computation, Communications</span>
        </h2>
        <br className="hidden lg:block lg:mt-12"/>
        <p className="mt-3 text-lg font-bold sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
          <span className="text-gray-900">20-24 September 2021</span>
          <br/>
          <span className="text-gray-500">Moscow, Russia</span>
          {/*<span className="ml-2 text-indigo-600">@online?</span>*/}
        </p>
        <br className="hidden lg:block lg:mt-12"/>

        <div className="mt-3 mx-0 md:mx-16 lg:mx-0 lg:w-1/2 xl:w-1/3">
          <div className="rounded-md shadow">
            <a href="https://uconfy.com/conf/4/"
               target="_blank"
               // className="flex items-center justify-center px-2 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              <FontAwesomeIcon icon={faDoorOpen} size="lg" className="mr-2 hidden md:block" />
              Submit paper
            </a>
          </div>
        </div>
      </div>

      {/* DCCN Logo */}
      <div className="hidden lg:block self-center">
        <img src="/images/dccn-logo.png" alt="DCCN logotype"/>
      </div>
    </main>
  );
}
