import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Emanuel Cisterna - Blog',
  description: 'Portafolio de Emanuel Cisterna, desarrollador web especializado en React e inteligencia artificial.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://emanuelcisterna.com',
    title: 'Emanuel Cisterna — Blog',
    description:
      'Portafolio de Emanuel Cisterna, desarrollador web especializado en React e inteligencia artificial.',
    siteName: 'Emanuel Cisterna',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emanuel Cisterna — Blog',
    description:
      'Portafolio de Emanuel Cisterna, desarrollador web especializado en React e inteligencia artificial.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
            <main >{children}</main>
      </body>
    </html>
  );
}
