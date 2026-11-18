import { Link } from "react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 py-8 text-sm text-slate-600">
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
