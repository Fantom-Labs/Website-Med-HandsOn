"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const pagesWithHero = ['/', '/quem-somos'];
  const [isHeroVisible, setIsHeroVisible] = useState(pagesWithHero.includes(pathname));

  useEffect(() => {
    const checkHeroVisibility = () => {
      const hero = document.getElementById('hero-section');
      if (!hero) {
        setIsHeroVisible(false);
        return;
      }
      setIsHeroVisible(window.scrollY < 50);
    };

    checkHeroVisibility();
    window.addEventListener('scroll', checkHeroVisibility, { passive: true });
    return () => window.removeEventListener('scroll', checkHeroVisibility);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  const navLinkColor = isHeroVisible ? '#FFFFFF' : '#252525';
  const iconColor = isHeroVisible ? 'white' : '#252525';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        backgroundColor: isHeroVisible ? 'transparent' : '#FFFFFF',
        height: '80px',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline border-none outline-none">
            <Image
              src={isHeroVisible ? '/logo-2.svg' : '/logo.svg'}
              alt="MedHandsOn Logo"
              width={185}
              height={48}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`${isActive('/') ? 'font-bold' : 'font-semibold'} transition-all`} style={{ color: navLinkColor, fontSize: '16px', fontFamily: 'var(--font-open-sans), sans-serif', transition: 'color 0.3s ease' }}>
              Home
            </Link>
            <Link href="/noticias" className={`${isActive('/noticias') ? 'font-bold' : 'font-semibold'} transition-all`} style={{ color: navLinkColor, fontSize: '16px', fontFamily: 'var(--font-open-sans), sans-serif', transition: 'color 0.3s ease' }}>
              Notícias
            </Link>
            <Link href="/quem-somos" className={`${isActive('/quem-somos') ? 'font-bold' : 'font-semibold'} transition-all`} style={{ color: navLinkColor, fontSize: '16px', fontFamily: 'var(--font-open-sans), sans-serif', transition: 'color 0.3s ease' }}>
              Quem Somos
            </Link>
            <Link href="/quem-somos#contato" className="font-semibold transition-all" style={{ color: navLinkColor, fontSize: '16px', fontFamily: 'var(--font-open-sans), sans-serif', transition: 'color 0.3s ease' }}>
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="text-white px-6"
              style={{
                background: 'linear-gradient(180deg, #0085FF 0%, #00488A 100%)',
                borderRadius: '8px',
                border: 'none',
                paddingTop: '24px',
                paddingBottom: '24px',
                fontSize: '18px',
                fontWeight: 500
              }}
            >
              <Link href="/cursos" className="flex items-center">
                Ver cursos disponíveis
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            style={{ color: iconColor, transition: 'color 0.3s ease' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold text-lg text-[#252525]">Menu</span>
            <button
              className="p-2 text-[#252525]"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <nav className="space-y-4">
              <Link
                href="/"
                className={`block text-lg ${isActive('/') ? 'font-bold' : 'font-medium'}`}
                style={{ color: '#252525', fontFamily: 'var(--font-open-sans), sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/noticias"
                className={`block text-lg ${isActive('/noticias') ? 'font-bold' : 'font-medium'}`}
                style={{ color: '#252525', fontFamily: 'var(--font-open-sans), sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias
              </Link>
              <Link
                href="/quem-somos"
                className={`block text-lg ${isActive('/quem-somos') ? 'font-bold' : 'font-medium'}`}
                style={{ color: '#252525', fontFamily: 'var(--font-open-sans), sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Quem Somos
              </Link>
              <Link
                href="/quem-somos#contato"
                className="block font-medium text-lg"
                style={{ color: '#252525', fontFamily: 'var(--font-open-sans), sans-serif' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>

            <div className="pt-4">
              <Button 
                asChild 
                className="w-full text-white px-6"
                style={{
                  background: 'linear-gradient(180deg, #0085FF 0%, #00488A 100%)',
                  borderRadius: '8px',
                  border: 'none',
                  paddingTop: '24px',
                  paddingBottom: '24px',
                  fontSize: '18px',
                  fontWeight: 500
                }}
              >
                <Link href="/cursos" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center">
                  Ver Cursos Disponíveis
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

