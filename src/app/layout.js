import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>xDannyx's app</title>
      </head>
      <body>
        <h5>Root Layout in the app directory applied to all routes.</h5>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
