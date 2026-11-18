import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Your app" }, { name: "description", content: "An app built in Couch to Commit." }];
}

export default function Home() {
  return (
    <div className="grid gap-6">
      <h1 className="text-4xl font-bold tracking-tight">Your app starts here.</h1>
      <p className="text-lg text-slate-700">
        This is the starter for Couch to Commit. By the Checkride it is a live app that takes test-mode payments. For
        now it is this page, a pricing page and a footer.
      </p>
      <ul className="grid list-disc gap-2 pl-6 text-slate-700">
        <li>
          Pages live in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">app/routes</code>, and{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">app/routes.ts</code> lists them.
        </li>
        <li>
          The layout and the footer are in <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">app/root.tsx</code>.
        </li>
      </ul>
    </div>
  );
}
