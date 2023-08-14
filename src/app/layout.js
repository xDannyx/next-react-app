import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>xDannyx's app</title>
      </head>
      <body className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div>
          <div className="flex mx-4 space-x-4">
            <Link href="/">Home</Link>
            <Link href="/game/clicker">Clicker</Link>
            <Link href="/game/xo">Game</Link>
            <Link href="/">Login via GitHub</Link>
            <Link href="/">Register</Link>
          </div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
