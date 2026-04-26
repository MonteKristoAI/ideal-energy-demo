import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const poppins = Poppins({ weight: ['500', '600', '700', '800'], subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: "Ideal Energy | Commercial Renewable Energy Solutions",
  description: "Ideal Energy transforms commercial real estate into high-performing energy assets. We navigate the complexities of procurement, efficiency, and renewable integration.",
  openGraph: {
    title: "Ideal Energy | Commercial Renewable Energy Solutions",
    description: "Ideal Energy transforms commercial real estate into high-performing energy assets. We navigate the complexities of procurement, efficiency, and renewable integration.",
    url: "https://idealenergyllc.com",
    siteName: "Ideal Energy LLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ideal Energy LLC",
              "url": "https://idealenergyllc.com",
              "logo": "https://idealenergyllc.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "consulting@idealenergyllc.com",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={`bg-brand-bg text-white font-sans antialiased selection:bg-white/20 selection:text-white ${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
