import {NextSeo} from 'next-seo';
import type {AppProps} from 'next/app';

import '../styles/global.css';

const App = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <NextSeo
        title="msr.codes"
        description=""
        additionalLinkTags={[
          {rel: 'icon', href: '/favicon.png'},
          {rel: 'apple-touch-icon', href: '/favicon-180.png', sizes: '180x180'},
        ]}
        noindex
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
