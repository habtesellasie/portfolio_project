import type { Metadata, Viewport } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { Providers } from '@/components/providers';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/static/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/static/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/static/favicon-16x16.png'
        />
        <link rel='manifest' href='/static/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/static/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#000000' />
        <title>My Portfolio</title>
      </Head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          roboto.variable
        )}
      >
        <Providers>
          <div className='min-h-dvh flex-col bg-background'>
            <div className='relative h-fit'>
              <div className='bg-[#61DBFB] xl:fixed absolute -left-10 -top-10 md:size-[450px] sm:size-[300px] size-[230px] blur-[100px]  md:blur-[200px] -z-2 rounded-full opacity-60'></div>
              <div className='bg-[#ff7790] xl:fixed absolute sm:-right-10 sm:-bottom-10 right-0 bottom-0 md:size-[450px] sm:size-[300px] size-[230px] blur-[100px]  md:dark:blur-[400px] md:blur-[150px] -z-2 rounded-full dark:opacity-40 opacity-25'></div>
              <main>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
