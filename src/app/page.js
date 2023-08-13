'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <h5>
        Hello, Next.js! Under this header you can find the main page. No one
        knows what I want to build LOL 😂
      </h5>
      <button
        className="py-1 px-3 mx-4 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50"
        onClick={() => router.push('/game/clicker')}
      >
        Clicker
      </button>
      <button
        className="py-1 px-3 mx-4 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50"
        onClick={() => router.push('/game/xo')}
      >
        XO Game
      </button>
    </>
  );
}
