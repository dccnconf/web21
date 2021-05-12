import '../styles/tailwind.css';
import 'katex/dist/katex.min.css';

import {config, library} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React from "react";
import * as locales from '../content/locale';
import {faDesktop, faNetworkWired, faWaveSquare} from "@fortawesome/free-solid-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {IntlProvider} from "react-intl";
import {useRouter} from "next/router"; // Import the CSS

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faNetworkWired, faWaveSquare, faDesktop, faYoutube);

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = locales[locale];

  return (
    <IntlProvider
      locale={"en"}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
