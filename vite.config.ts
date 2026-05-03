import fs from "fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPagesSite = repositoryName?.endsWith(".github.io");
const hasCustomDomain = fs.existsSync(path.resolve(__dirname, "public/CNAME"));
const basePath =
  process.env.VITE_BASE_PATH ??
  (hasCustomDomain
    ? "/"
    : process.env.GITHUB_ACTIONS === "true"
    ? isUserOrOrgPagesSite
      ? "/"
      : repositoryName
        ? `/${repositoryName}/`
        : "/"
    : "/");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: basePath,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
