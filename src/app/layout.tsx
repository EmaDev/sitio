import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { AppHeader } from '@/components/shared/header';
import { AppFooter } from '@/components/shared/footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';


export const metadata: Metadata = {
  title: 'Emanuel Cisterna',
  description: 'Portfolio de Emanuel Cisterna, desarrollador web especializado en React e inteligencia artificial.',
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
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1">{children}</main>
            <AppFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
