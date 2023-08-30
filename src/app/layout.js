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
        <section>
          <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
            <Link href="/">xDannyx.dev</Link>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              <Link href="/game/clicker">Clicker</Link>
              <Link href="/game/xo">Game</Link>
              <Link href="/chat">Chat</Link>
              <p className="w-8 h-8 bg-gray-200 rounded-full dark:bg-gray-700"></p>
            </div>
          </div>
        </section>
        <div className="container flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
