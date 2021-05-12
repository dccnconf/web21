import React, {useEffect, useState} from "react";
import Image from 'next/image'
import {withRouter} from "next/router";
import {NavbarDropdownItem} from "./Navbar";

export const LANGUAGES_MAP = {
  ru: "Русский",
  en: "English"
}

function ChangeLangItem({name, onClick, active = false}) {
  const className = "flex items-center cursor-pointer " + (active ? "opacity-50 cursor-not-allowed" : "");
  return <div className={className} onClick={() => onClick && onClick(name)}>
    <Image className="mr-8"
           width={32}
           height={16}
           src={`/images/langs/${name}.png`}/>
    <span className="ml-2">{LANGUAGES_MAP[name]}</span>
  </div>
}

function ChangeLang({router}) {
  const {locale, pathname} = router;
  const [currentLang, setCurrentLang] = useState(locale);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(false);
    setTimeout(() => {
      changeLang(currentLang);
    }, 300)
  }, [currentLang])

  const changeLang = (currentLang) => {
    router.push(pathname, pathname, {locale: currentLang});
  }

  return <NavbarDropdownItem
    bodyStyle={{width: "170px", transform: "translateX(-32px)"}}
    isActive={true}
    text={<ChangeLangItem key={currentLang}
                          name={currentLang}
                          textName="English"/>}
    isShown={isShown}
    setIsShown={shown => setIsShown(shown)}
    additionalBodyClasses="w-auto"
  >
    <ChangeLangItem key="en"
                    onClick={setCurrentLang}
                    active={currentLang === "en"}
                    name="en"/>
    <ChangeLangItem key="ru"
                    onClick={setCurrentLang}
                    active={currentLang === "ru"}
                    name="ru"/>
  </NavbarDropdownItem>
}

export default withRouter(ChangeLang)
