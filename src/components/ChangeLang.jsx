import React, {useContext, useEffect, useState} from "react";
import Image from 'next/image'
import {useRouter} from "next/router";
import {NavbarDropdownItem} from "./Navbar";
import {LocalizationContext} from "../contexts/LocalizationProvider";

export const LANGUAGES_MAP = {
  ru: "Русский",
  en: "English"
}

function ChangeLangItem({name, onClick, active = false, isMobile = false}) {
  const className = "flex items-center cursor-pointer " + (active ? "opacity-50 cursor-not-allowed" : "");
  return <div className={className} onClick={() => onClick && onClick(name)}>
    <div style={{width: 32, display: "flex"}}>
      <Image className="mr-8"
             width={32}
             height={24}
             src={`/images/langs/${name}.png`}/>
    </div>
    {!isMobile ? <span className="ml-2">{LANGUAGES_MAP[name]}</span> : null}
  </div>
}

function ChangeLang({isMobile = false}) {
  const {setLocale, locale} = useContext(LocalizationContext);
  const [isShown, setIsShown] = useState(false);

  const bodyStyle = isMobile ? {
    width: "54px",
    padding: 0,
    transform: "translateX(8px)"
  } : {
    width: "170px",
    transform: "translateX(-32px)"
  }

  const itemStyle = isMobile ? {
    padding: "0.5rem",
    gridGap: "1rem",
    gap: "1rem"
  } : {};

  const changeLang = (lang) => {
    setIsShown(false);
    setTimeout(() => {
      setLocale(lang);
    }, 300)
  }

  return <NavbarDropdownItem
    bodyStyle={bodyStyle}
    itemStyle={itemStyle}
    isActive={true}
    text={
      <ChangeLangItem key={locale}
                      name={locale}
                      isMobile={isMobile}
      />
    }
    isShown={isShown}
    setIsShown={shown => setIsShown(shown)}
    additionalBodyClasses="w-auto"
  >
    <ChangeLangItem key="en"
                    onClick={changeLang}
                    active={locale === "en"}
                    isMobile={isMobile}
                    name="en"/>
    <ChangeLangItem key="ru"
                    onClick={changeLang}
                    active={locale === "ru"}
                    isMobile={isMobile}
                    name="ru"/>
  </NavbarDropdownItem>
}

export default ChangeLang
