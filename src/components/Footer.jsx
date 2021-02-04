import React from "react";
import Link from "next/link";

const Footer = () => (
  <div className="pt-12 pb-8">
    <div className="container px-8 mx-auto xl:w-3/4">
      <div className="flex flex-col md:flex-row items-start">

        <div className="sm:w-1/2 lg:w-1/2 order-2 md:order-1 mt-8 sm:mt-0">
          <div className="flex flex-col items-start">
            <Link href={"/"}>
              <img src="/images/dccn-logo.png" alt="DCCN logo"
                   className="w-12 h-12 mr-3 lg:w-16 lg:h-16 cursor-pointer"/>
            </Link>
            <div className="text-gray-500 md:mt-2">
              <Link href={"/"}>
                <a className="hover:underline leading-7 font-medium lg:text-xl">DCCN'2020</a>
              </Link>
              <div className="text-xs font-medium">
                All rights reserved
              </div>
            </div>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:grid-flow-row gap-12 order-1 md:order-2">
          <div className="">
            <Link href="/">
              <a className="font-medium uppercase tracking-wide text-gray-500 hover:underline">Conference</a>
            </Link>
            <ul className="text-gray-600 leading-tight">
              {getConferenceLinks().map((link, index) => <li key={index} className="my-3">{link}</li>)}
            </ul>
          </div>
          <div className="mt-8 sm:mt-0">
            <Link href={"/program"}>
              <a className="font-medium uppercase tracking-wider text-gray-500 hover:underline">Program</a>
            </Link>
            <ul className="text-gray-600 leading-tight">
              {getProgramLinks().map((link, index) => <li key={index} className="my-3">{link}</li>)}
            </ul>
          </div>
          <div className="mt-8 sm:mt-0">
            <Link href={"/support"}>
              <a className="font-medium uppercase tracking-wider text-gray-500 hover:underline">Support</a>
            </Link>
            <ul className="text-gray-600 leading-tight">
              {getSupportLinks().map((link, index) => <li key={index} className="my-3">{link}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FooterLink = ({ href, hash = undefined, label }) => (
  <Link href={href} as={hash ? `${href}#${hash}` : undefined}>
    <a className="leading-3 tracking-wide text-gray-600 hover:underline hover:text-blue-600">{label}</a>
  </Link>
);

const getConferenceLinks = () => [
  <FooterLink href={"/"} hash="about" label="About" />,
  <FooterLink href={"/authors"} label="CFP" />,
  <FooterLink href={"/"} hash="timeline" label="Timeline" />,
  <FooterLink href={"/"} hash="committee" label="Organizers" />,
];

const getProgramLinks = () => [
];

const getSupportLinks = () => [
];

export default Footer;