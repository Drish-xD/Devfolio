import Script from 'next/script';

export default function GoogleTag() {
  return (
    <>
      <Script strategy="worker" src="https://www.googletagmanager.com/gtag/js?id=G-40B78ZZ8HD" />
      <Script strategy="worker" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-40B78ZZ8HD');
        `}
      </Script>
    </>
  );
}
