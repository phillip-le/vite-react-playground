import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: ["./setupTests.ts"],
    environment: "jsdom",
    include: ["**/src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
  },
});
