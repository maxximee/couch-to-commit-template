import type { Route } from "./+types/pricing";

export function meta(_: Route.MetaArgs) {
  return [{ title: "Pricing" }];
}

export default function Pricing() {
  return (
    <div className="grid gap-6">
      <h1 className="text-4xl font-bold tracking-tight">Pricing</h1>
      <p className="text-lg text-slate-700">Nothing to sell yet. Module 5 adds Stripe Checkout to this page.</p>
    </div>
  );
}
