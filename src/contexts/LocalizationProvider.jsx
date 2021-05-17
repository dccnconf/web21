import React, {useState} from "react";
import {useRouter} from "next/router";
import * as locales from "../content/locale";
import {IntlProvider} from "react-intl";

export const LocalizationContext = React.createContext({
  locale: "ru",
  messages: {},
  setLocale: () => {}
});

const LocalizationProvider = ({children}) => {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);

  const changeLang = (currentLang) => {
    router.push(router.pathname, router.pathname, {locale: currentLang});
    setLocale(currentLang);
  }

  const messages = locales[locale];

  return <LocalizationContext.Provider value={{
    locale,
    setLocale: changeLang
  }}>
    <IntlProvider
      locale={locale}
      defaultLocale={router.defaultLocale}
      messages={messages}
    >
      {children}
    </IntlProvider>
  </LocalizationContext.Provider>
}

export default LocalizationProvider;
