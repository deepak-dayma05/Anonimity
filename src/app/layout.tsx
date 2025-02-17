import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from '../context/AuthProvider';
import './globals.css'

import { Toaster } from "@/components/ui/toaster"




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anonimity",
  description: "Real feedback from real people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <AuthProvider>
      <body className={inter.className}>

        {children}
        <Toaster />
      </body>
      </AuthProvider>
    </html>
  );
}
