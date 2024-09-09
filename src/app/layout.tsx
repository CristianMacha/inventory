import type { Metadata } from "next";
import localFont from 'next/font/local'

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Inventory App",
  description: "Created by @vcristianms",
  authors: [{url: 'https://vcristian.com', name: 'Cristian Macha Serva'}],
};

const geist = localFont({
  src: [
    {
      path: './fonts/geist-sans-latin-100-normal.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/geist-sans-latin-200-normal.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/geist-sans-latin-300-normal.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/geist-sans-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/geist-sans-latin-500-normal.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/geist-sans-latin-600-normal.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/geist-sans-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/geist-sans-latin-800-normal.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/geist-sans-latin-900-normal.woff2',
      weight: '900',
      style: 'normal',
    }
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <UserProvider>
        <body
          className={`${geist.className}`}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
