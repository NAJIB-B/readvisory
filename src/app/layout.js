import './globals.css';
import { Poppins } from 'next/font/google';

import Script from 'next/script';
import "tw-elements/dist/css/tw-elements.min.css";
import NavBar from '@/components/navBar/navbar';
import { QueryModal } from '@/components/navBar/queryModal';

const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG}`}
        ></Script>

        <Script strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG});
            
            `}
        </Script>
      </head>
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <QueryModal/>
      </body>
    </html>
  );
}
