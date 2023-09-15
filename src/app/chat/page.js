'use client';
import { useState } from 'react';
import { Message } from './message.js';

export default function Page() {
  const [d, n] = useState(['']);
  const [message, setMessage] = useState('');

  function testMessage(chatMessage) {
    n([...d, chatMessage]);
    setMessage('');
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // przeczytac co dokladnie to robi
      testMessage(event.target.value);
    }
  };

  function clearChat() {
    document.getElementById('textArea').innerHTML = '';
  }

  return (
    <>
      <p className="font-sans text-base">
        SŁAWO AI v0.noob bot made by Ulvhedin 🤖
      </p>
      <div className="mx-auto w-full max-w-md py-5 flex flex-col stretch">
        <div className="whitespace-pre-wrap">
          <button
            className="px-2 rounded-md border-2 border-rose-500"
            onClick={() => clearChat()}
          >
            CLEAR CHAT
          </button>
          <div id="textArea">
            {d.map((item, i) => (
              <Message text={item} key={i} />
            ))}
          </div>
        </div>
        <div className="fixed w-full max-w-md bottom-0 rounded mb-8 p-2">
          <div className="flex">
            <input
              className="w-full border border-gray-300 rounded-md"
              onChange={handleChange}
              value={message}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-black text-white rounded-md px-4 mx-1"
              onClick={() => testMessage(message)}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
