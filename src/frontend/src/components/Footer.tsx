import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder functionality
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'cosmata-app'
  );

  return (
    <footer className="border-t border-border bg-beige">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-serif text-2xl font-bold text-gold">Cosmata</h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Science-backed skincare for glowing, healthy skin. Dermatologically tested and clinically proven.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-gold hover:bg-gold/90">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground transition-colors hover:text-gold">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-muted-foreground transition-colors hover:text-gold">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground transition-colors hover:text-gold">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground transition-colors hover:text-gold">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground transition-colors hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Connect With Us</h4>
            <p className="mb-2 text-sm text-muted-foreground">Email: hello@cosmata.com</p>
            <p className="mb-4 text-sm text-muted-foreground">Phone: +91 98765 43210</p>
            
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-gold"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              © {new Date().getFullYear()} Cosmata. Built with{' '}
              <Heart className="h-4 w-4 fill-gold text-gold" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold hover:underline"
              >
                caffeine.ai
              </a>
            </p>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Secure Payment:</span>
              <span className="rounded bg-card px-2 py-1 font-semibold">VISA</span>
              <span className="rounded bg-card px-2 py-1 font-semibold">MC</span>
              <span className="rounded bg-card px-2 py-1 font-semibold">UPI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
