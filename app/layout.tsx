import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio développeur·se",
  description: "Portfolio minimaliste dans des tons beige/blanc/marron.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portfolio développeur·se",
    description: "Un portfolio chaleureux en beige/blanc/marron.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-[color:var(--beige-50)]/80 border-b border-beige">
          <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
            <a href="#accueil" className="text-sm font-semibold text-brown-strong">Portfolio</a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="#projets" className="hover:text-brown">Projets</a>
              <a href="#a-propos" className="hover:text-brown">À propos</a>
              <a href="#contact" className="btn-coffee">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-beige bg-sand-100">
          <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-coffee flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Portfolio développeur·se</p>
            <p className="opacity-70">Construit avec Next.js</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
