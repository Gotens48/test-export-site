import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "@/pages/home/components/Logo";
import Footer from "@/pages/home/components/Footer";

interface LegalLayoutProps {
  children: ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background-50 text-foreground-950 font-sans flex flex-col">
      <header className="sticky top-0 z-50 bg-background-50/90 backdrop-blur-xl border-b border-foreground-950/10">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <Logo size="sm" withWordmark={true} />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground-600 hover:text-foreground-950 transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center" />
            Retour au site
          </Link>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}