import Head from 'next/head'
import Script from 'next/script'
import { Fragment, useEffect, useState } from 'react'
import PreLoader from '../src/layouts/PreLoader'
import '../styles/globals.css'
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true)
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 600)
  }, [])

  return (
    <Fragment>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-WWMYQVSK5B`}
      />
      <Script strategy='lazyOnload'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WWMYQVSK5B');
                `}
      </Script>
      <Head>
        <title>Aleksandra Bednarska - lektorka angielskiego</title>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='HandheldFriendly' content='true' />
        <meta name='author' content='Hubert Strawa' />

        {/* TODO / quick fix so it doesnt overwrite og:image on specific posts */}
        {!router.pathname.startsWith('/posts/') && (
          <meta
            property='og:image'
            content='https://abednarska.com/assets/images/preview.png'
          />
        )}

        {/* Fonts */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&display=swap'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto'
          type='text/css'
          media='all'
        />
        {/* CSS STYLES */}
        <link
          rel='stylesheet'
          href='/assets/css/vendors/bootstrap.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='/assets/fonts/font-awesome/css/font-awesome.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='/assets/css/vendors/magnific-popup.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='/assets/css/vendors/splitting.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='/assets/css/vendors/swiper.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='assets/css/vendors/animate.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='/assets/css/style.css'
          type='text/css'
          media='all'
        />
        <link
          rel='stylesheet'
          href='/assets/css/dark.css'
          type='text/css'
          media='all'
        />
        {/* Favicon */}
        <link
          rel='shortcut icon'
          href='/assets/images/logo_ab.svg'
          type='image/x-icon'
        />
        <link
          rel='icon'
          href='/assets/images/logo_ab.svg'
          type='image/x-icon'
        />
        {/* <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-WWMYQVSK5B'
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-WWMYQVSK5B');
        </script> */}
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  )
}
export default App
