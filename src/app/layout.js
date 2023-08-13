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
          <h5 className="text-3x1 font-bold underline">
            Root Layout in the app directory applied to all routes. Here should
            be navigation bar, because it will be visible on all routes.
          </h5>
          <Link href="/">Home </Link>
          <Link href="/game/clicker">Clicker </Link>
          <Link href="/game/xo">Game</Link>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
