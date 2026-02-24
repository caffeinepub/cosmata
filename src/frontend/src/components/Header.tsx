import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGetCart } from '../hooks/useQueries';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { data: cart } = useGetCart();

  const cartItemCount = cart?.items.reduce((sum, item) => sum + Number(item.quantity), 0) || 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="font-serif text-2xl font-bold text-gold">
          Cosmata
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-foreground transition-colors hover:text-gold">
            Home
          </Link>
          <Link to="/shop" className="text-sm font-medium text-foreground transition-colors hover:text-gold">
            Shop
          </Link>
          <a href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-gold">
            About
          </a>
          <a href="#blog" className="text-sm font-medium text-foreground transition-colors hover:text-gold">
            Blog
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground transition-colors hover:text-gold">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => navigate({ to: '/cart' })}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-white">
                {cartItemCount}
              </span>
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <Link
              to="/"
              className="text-sm font-medium text-foreground transition-colors hover:text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-sm font-medium text-foreground transition-colors hover:text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <a
              href="#about"
              className="text-sm font-medium text-foreground transition-colors hover:text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#blog"
              className="text-sm font-medium text-foreground transition-colors hover:text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground transition-colors hover:text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
