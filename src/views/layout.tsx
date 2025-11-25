import { html } from "hono/html";
import type { Child } from "hono/jsx";

export const Layout = ({
  children,
  title,
}: {
  children: Child;
  title: string;
}) => {
  return (
    <>
      {html`<!DOCTYPE html>`}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/src/styles/main.css" />
        </head>
        <body class="bg-brand-bg text-brand-text transition-colors duration-200 min-h-screen flex flex-col">
          {children}
        </body>
      </html>
    </>
  );
};
