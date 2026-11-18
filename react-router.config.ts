import type { Config } from "@react-router/dev/config";

export default {
  // Server rendering stays on: Stripe webhooks and sign-in need a server later in the course.
  ssr: true,
} satisfies Config;
