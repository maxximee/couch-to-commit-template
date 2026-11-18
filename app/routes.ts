import { index, route, type RouteConfig } from "@react-router/dev/routes";

// Every page of the app is listed here. The files live in app/routes.
export default [
  index("routes/home.tsx"),
  route("pricing", "routes/pricing.tsx"),
] satisfies RouteConfig;
