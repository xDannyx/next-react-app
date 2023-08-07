"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, Next.js!</h1>
      <button onClick={() => setCount(count + 1)}>
        You have clicked me {count} times!
      </button>
    </>
  );
}
