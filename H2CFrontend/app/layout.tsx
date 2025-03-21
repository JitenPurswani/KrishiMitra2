import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FarmTech Assistant",
  description: "Modern farming solutions for sustainable agriculture",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
            <Navbar />
            
            {/* Google Translate Dropdown */}
            <div className="flex justify-end p-4">
              <div id="google_translate_element"></div>
            </div>

            <main className="flex-1">{children}</main>
            
            <footer className="bg-primary text-primary-foreground py-6">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">FarmTech Assistant</h3>
                    <p className="text-sm">Empowering farmers with technology for sustainable agriculture.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="/" className="hover:underline">Home</a></li>
                      <li><a href="/crop-recommendation" className="hover:underline">Crop Recommendation</a></li>
                      <li><a href="/organic-farming" className="hover:underline">Organic Farming</a></li>
                      <li><a href="/government-schemes" className="hover:underline">Government Schemes</a></li>
                      <li><a href="/crop-rotation" className="hover:underline">Crop Rotation</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p className="text-sm">
                      Email: support@farmtech.com <br />
                      Phone: +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center text-sm">
                  © {new Date().getFullYear()} FarmTech Assistant. All rights reserved.
                </div>
              </div>
            </footer>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
