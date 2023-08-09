"use client";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        Hello, Next.js! Under this header you can find the main page. No one
        knows what I want to build LOL 😂
      </h1>
      <button onClick={() => setCount(count + 1)}>
        You have clicked me {count} times!
      </button>
    </>
  );
}
