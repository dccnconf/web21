import React, {useState} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faInfo,
  faCoins,
  faCalendarDay,
  faWaveSquare,
  faDesktop,
  faNetworkWired,
  faUserFriends, faFileInvoice
} from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt, faEnvelope, faStar} from '@fortawesome/free-regular-svg-icons';
import OutsideClickHandler from "react-outside-click-handler";
import {Transition} from "@tailwindui/react";
import ChangeLang from "./ChangeLang";
import {useIntl} from "../hooks/useIntl";
import {LocalizationContext} from "../contexts/LocalizationProvider";


export default function Navbar({active = 'conference'}) {
  const {translate} = useIntl();

  const NO_MENUS_SHOWN = {
    conference: false,
    program: false,
    support: false
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(NO_MENUS_SHOWN);

  const setIsMenuShown = (menu, shown) => {
    const newState = {...NO_MENUS_SHOWN};
    newState[menu] = shown;
    setIsShown(newState);
  };

  const closeAll = () => {
    setIsOpen(false);
    setIsShown(NO_MENUS_SHOWN);
  }

  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start lg:space-x-10">
            <div className="md:flex-1">
              <Brand/>
            </div>

            {/* Mobile menu toggler */}
            <div className="flex flex-1 flex-shrink-0 justify-end items-center ml-4  md:hidden">
              <LocalizationContext.Consumer>
                {({locale}) => (
                  <ChangeLang isMobile={true} locale={locale}/>
                )}
              </LocalizationContext.Consumer>
              <div className="-mr-2 -my-2 md:hidden">
                <button type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        onClick={() => setIsOpen(true)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Desktop menu */}
            <nav className="md:flex-1 hidden md:flex space-x-5 lg:space-x-10">
              <NavbarDropdownItem
                isActive={active === 'conference'}
                text={translate("navigation.conference")}
                isShown={isShown.conference}
                setIsShown={shown => setIsMenuShown('conference', shown)}
                tails={[
                  <TailDropdownLink
                    href="/support"
                    as="/support#contact"
                    icon={faEnvelope}
                    text={translate("navigation.contact.us")}
                    iconClassName="text-indigo-600"
                  />
                ]}
              >
                <ConferenceMenu onClick={closeAll}/>
              </NavbarDropdownItem>

              <NavbarLink text={translate("navigation.authors")} isActive={active === 'authors'} href="/authors"/>
              <NavbarLink text={translate("navigation.program")} isActive={active === 'program'} href="/program"/>

              <NavbarDropdownItem
                isActive={active === 'support'}
                text={translate("navigation.support")}
                isShown={isShown.support}
                setIsShown={shown => setIsMenuShown('support', shown)}
              >
                <SupportMenu onClick={closeAll}/>
              </NavbarDropdownItem>

            </nav>

            <div className="hidden md:flex flex-1 flex-shrink-0 justify-end md:justify-center items-center ml-4">
              <LocalizationContext.Consumer>
                {({locale}) => (
                  <ChangeLang locale={locale}/>
                )}
              </LocalizationContext.Consumer>
            </div>
          </div>
        </div>

        {/*Mobile menu, show/hide based on mobile menu state.*/}

        <OutsideClickHandler onOutsideClick={() => closeAll()}>
          <Transition
            show={isOpen}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5 space-y-6">
                    <div className="flex items-center justify-between">
                      <Brand/>
                      {/* Close menu button */}
                      <div className="-mr-2">
                        <button type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                onClick={() => setIsOpen(false)}
                        >
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Currently active menu */}
                    <nav className="grid row-gap-8">
                      {
                        (active === 'conference' && (<ConferenceMenu onClick={closeAll}/>)) ||
                        (active === 'support' && (<SupportMenu onClick={closeAll}/>))
                      }
                    </nav>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 row-gap-4 col-gap-8">
                      <NavbarLink text={translate("navigation.conference")} href="/" onClick={closeAll}/>
                      <NavbarLink text={translate("navigation.authors")} href="/authors" onClick={closeAll}/>
                      <NavbarLink text={translate("navigation.program")} href="/program" onClick={closeAll}/>
                      <NavbarLink text={translate("navigation.contact.us")} href="/support" onClick={closeAll}/>
                    </div>
                    <div className="space-y-6"/>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </OutsideClickHandler>
      </div>
    </>
  );
}


/**********************************************************************
 TOP LEVEL COMPONENTS: BRAND, MENUS
 **********************************************************************/
const Brand = () => (
  <Link href="/">
    <a className="font-bold">
      DCCN'2021
    </a>
  </Link>
);


const ConferenceMenu = ({onClick}) => {
  const {translate} = useIntl();

  return <>
    <NavbarDropdownMenuItem
      href="/" as="/#about" icon={faInfo} text={translate("navigation.about")} iconClassName="mx-2"
      comment={translate("navigation.about.desc")}
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/" as="/#keynotes" icon={faStar} text={translate("navigation.keynote.speakers")}
      comment={translate("navigation.about.desc")}
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/" as="/#timeline" icon={faCalendarDay} text={translate("navigation.timeline")}
      comment={translate("navigation.timeline.desc")}
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/" as="/#committee" icon={faUserFriends} text={translate("navigation.organizers.sponsors")}
      comment={translate("navigation.organizers.sponsors.desc")}
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/" as="/#fees" icon={faCoins} text={translate("navigation.reg.fees")}
      comment={translate("navigation.reg.fees.desc")}
      onClick={onClick}
    />
  </>
};


// const AuthorsMenu = ({onClick}) => (
//   <>
//     <NavbarDropdownMenuItem
//       href="/authors" icon={faPenNib} text="Call for Papers" iconClassName="mx-2"
//       comment="Authors guidelines, requirements and conference topics"
//       onClick={onClick}
//     />
//   </>
// );


const ProgramMenu = ({onClick}) => (
  <>
    <NavbarDropdownMenuItem
      href="/program" icon={faCalendarAlt} text="Conference Schedule"
      comment="General schedule of DCCN'2021 conference"
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/program" as="/program#plenary" icon={faStar} text="Plenary session"
      comment="Learn more about the plenary session, keynote speakers and presentations"
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/program" as="/program#tra" icon={faNetworkWired} text="Track A: Computer and Communication Networks"
      comment="General sessions schedule for Computer and Communication Networks track"
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/program" as="/program#trb" icon={faWaveSquare} text="Track B: Analytical Modeling of Distributed Systems"
      comment="General sessions schedule for Analytical Modeling of Distributed Systems track"
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/program" as="/program#trc" icon={faDesktop} text="Track C: Distributed Systems Applications"
      comment="General sessions schedule for Distributed Systems Applications track"
      onClick={onClick}
    />
  </>
);


const SupportMenu = ({onClick}) => {
  const {translate} = useIntl();

  return <>
    <NavbarDropdownMenuItem
      href="/support" as="/support#payment" icon={faFileInvoice}
      text={translate("navigation.payment.details")} iconClassName="mx-2"
      comment={translate("navigation.payment.details.desc")}
      onClick={onClick}
    />
    <NavbarDropdownMenuItem
      href="/support" as="/support#contact" icon={faEnvelope} text={translate("navigation.contact.us")} iconClassName="mx-2"
      comment={translate("navigation.contact.us.desc")}
      onClick={onClick}
    />
  </>
};


/**********************************************************************
 LOW LEVEL COMPONENTS
 **********************************************************************/

const NavbarLink = ({isActive, text, href, onClick}) => {
  const colorClassName = isActive ? 'text-gray-900' : 'text-gray-900 md:text-gray-500';
  return (
    <div onClick={onClick}>
      <Link href={href}>
        <a
          className={`${colorClassName} text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}>
          {text}
        </a>
      </Link>
    </div>
  );
}

export const NavbarDropdownItem = ({isActive, text, children, isShown, setIsShown, tails = [], bodyStyle = {}, itemStyle = {}} = {}) => (
  <OutsideClickHandler
    onOutsideClick={
      () => {
        if (isShown)
          setIsShown(false);
      }
    }
  >
    <div className="relative">
      <button
        type="button"
        className={`${isActive ? 'text-gray-900' : 'text-gray-500'} group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}
        onClick={() => setIsShown(!isShown)}
      >
        {text}
        <svg
          className="text-gray-400 h-5 w-5 ml-2 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
          viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"/>
        </svg>
      </button>
      <Transition
        show={isShown}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div style={bodyStyle}
             className={"absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"}>
          <div className="rounded-lg border shadow-lg shadow-xs overflow-hidden z-20">
            <div style={itemStyle} className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {children}
            </div>
            {
              tails && tails.length > 0 && (
                <div className="px-5 py-5 bg-gray-200 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                  {
                    tails.map((link, index) => (
                      <div className="flow-root" key={index}>
                        {link}
                      </div>
                    ))
                  }
                </div>
              )
            }
          </div>
        </div>
      </Transition>
    </div>
  </OutsideClickHandler>
);


const NavbarDropdownMenuItem = ({href, as = undefined, icon, iconClassName = "mx-1", text, comment, onClick}) => (
  <div onClick={onClick}>
    <Link href={href} as={as}>
      <a
        className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
        {icon &&
        <div className="flex justify-center mt-0 md:mt-2" style={{"max-width": 32, "min-width": 32}}><FontAwesomeIcon
          icon={icon} size="lg" className={`text-indigo-600 ${iconClassName}`}/></div>}
        <div className="space-y-1">
          <p className="text-base leading-6 font-medium text-gray-900 mb-1">{text}</p>
          {comment && (<p className="hidden md:block text-sm leading-5 text-gray-500">{comment}</p>)}
        </div>
      </a>
    </Link>
  </div>
);


export const TailDropdownLink = ({href, as = undefined, icon, iconClassName = "mx-1", text, onClick}) => (
  <div onClick={onClick}>
    <Link href={href} as={as}>
      <a
        className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150">
        <FontAwesomeIcon icon={icon} className={iconClassName}/>
        <span>{text}</span>
      </a>
    </Link>
  </div>
);
