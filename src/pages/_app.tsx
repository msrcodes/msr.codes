import {NextSeo} from 'next-seo';
import type {AppProps} from 'next/app';

import '../styles/global.css';

const App = ({Component, pageProps}: AppProps) => {
  const description = 'Mikael Rozee - Digital and Web Engineering Lead';
  const siteUrl = 'https://msr.codes/';
  return (
    <>
      <NextSeo
        title="Mikael Rozee"
        description={description}
        twitter={{handle: '@msrcodes', site: siteUrl}}
        openGraph={{
          description,
          url: siteUrl,
        }}
        additionalLinkTags={[
          {rel: 'icon', href: '/favicon.png'},
          {rel: 'apple-touch-icon', href: '/favicon.png', sizes: '180x180'},
        ]}
      />
      <Component {...pageProps} />
    </>
  );
};

export default App;
