import type { ReactNode } from "react";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import { SiteFooter } from "./components/site-footer";
import "./app.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-6">
      <main className="flex-1 py-16">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const title = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : "Something went wrong";
  const detail = isRouteErrorResponse(error)
    ? error.status === 404
      ? "There is no page at this address."
      : String(error.data ?? "")
    : import.meta.env.DEV && error instanceof Error
      ? error.message
      : "";
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">{title}</h1>
      {detail ? <p className="mt-4 text-slate-600">{detail}</p> : null}
    </main>
  );
}
