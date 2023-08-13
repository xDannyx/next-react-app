'use client';
import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="p-2 mx-2 bg-red-500 font-semibold rounded-md text-white hover:bg-green-500"
        onClick={() => setCount(count + 1)}
      >
        You have clicked me {count} times!
      </button>
    </>
  );
}
