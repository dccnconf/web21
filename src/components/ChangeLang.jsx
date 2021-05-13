import React, {useEffect, useState} from "react";
import Image from 'next/image'
import {useRouter} from "next/router";
import {NavbarDropdownItem} from "./Navbar";

export const LANGUAGES_MAP = {
  ru: "Русский",
  en: "English"
}

function ChangeLangItem({name, onClick, active = false, isMobile = false}) {
  const className = "flex items-center cursor-pointer " + (active ? "opacity-50 cursor-not-allowed" : "");
  return <div className={className} onClick={() => onClick && onClick(name)}>
    <div style={{width: 32}}>
      <Image className="mr-8"
             width={32}
             height={16}
             src={`/images/langs/${name}.png`}/>
    </div>
    {!isMobile ? <span className="ml-2">{LANGUAGES_MAP[name]}</span> : null}
  </div>
}

function ChangeLang({isMobile = false}) {
  const router = useRouter();
  const {locale, pathname} = router;
  const [currentLang, setCurrentLang] = useState(locale);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(false);
    setTimeout(() => {
      changeLang(currentLang);
    }, 300)
  }, [currentLang]);

  const changeLang = (currentLang) => {
    router.push(pathname, pathname, {locale: currentLang});
  }

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

  return <NavbarDropdownItem
    bodyStyle={bodyStyle}
    itemStyle={itemStyle}
    isActive={true}
    text={<ChangeLangItem key={currentLang}
                          name={currentLang}
                          isMobile={isMobile}
                          textName="English"/>}
    isShown={isShown}
    setIsShown={shown => setIsShown(shown)}
    additionalBodyClasses="w-auto"
  >
    <ChangeLangItem key="en"
                    onClick={setCurrentLang}
                    active={currentLang === "en"}
                    isMobile={isMobile}
                    name="en"/>
    <ChangeLangItem key="ru"
                    onClick={setCurrentLang}
                    active={currentLang === "ru"}
                    isMobile={isMobile}
                    name="ru"/>
  </NavbarDropdownItem>
}

export default ChangeLang
