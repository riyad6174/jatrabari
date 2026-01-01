
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="https://i.ibb.co/pBPPv0Y1/jps.png" alt="Jatrabari Preparatory School Logo" width={40} height={40} />
              <span className="text-xl font-bold font-headline">Jatrabari Preparatory School</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Nurturing young minds for a bright future since 2003. <br />
              EIIN: 107868
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-primary-foreground/80 space-y-2">
              <p>Jatrabari, Dhaka-1204</p>
              <p>Email: <a href="mailto:jatrabaripreparatoryschool@gmail.com" className="hover:text-primary-foreground">jatrabaripreparatoryschool@gmail.com</a></p>
              <p>Phone: <a href="tel:+8801712345678" className="hover:text-primary-foreground">+880 1712-345678</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Jatrabari Preparatory School. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
