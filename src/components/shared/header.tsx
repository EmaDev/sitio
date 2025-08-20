
"use client";
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Code, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export function AppHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();
  const closeSheet = () => setIsSheetOpen(false);

  if (pathname === '/blog') {
    return null;
  }
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Code className="h-6 w-6 bg-gradient-to-r text-[#FD6585]" />
        <span className="sr-only">Portafolio Emanuel Cisterna</span>
        <span className="font-semibold text-lg ml-2 font-headline">Emanuel Cisterna</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
        <Link className="text-sm font-medium hover:text-[#FD6585] transition-colors" href="/proyectos" prefetch={false}>
          Proyectos
        </Link>
        <Link className="text-sm font-medium hover:text-[#FD6585] transition-colors" href="/curriculum" prefetch={false}>
          Currículum
        </Link>
        <Link className="text-sm font-medium hover:text-[#FD6585] transition-colors" href="/blog" prefetch={false}>
          Blog
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto flex items-center md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <div className='flex items-center gap-2'>
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="left">
            <div className="flex flex-col pt-12  space-y-4">
              <nav className="flex flex-col space-y-4">
                <Link className="text-lg font-medium hover:text-[#FD6585] transition-colors" href="/proyectos" prefetch={false} onClick={closeSheet}>
                  Proyectos
                </Link>
                <Link className="text-lg font-medium hover:text-[#FD6585] transition-colors" href="/curriculum" prefetch={false} onClick={closeSheet}>
                  Currículum
                </Link>
                <Link className="text-lg font-medium hover:text-[#FD6585] transition-colors" href="/blog" prefetch={false} onClick={closeSheet}>
                  Blog
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
