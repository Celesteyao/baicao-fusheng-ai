import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase = repositoryName?.endsWith(".github.io")
  ? "/"
  : `/${repositoryName}/`;

export default defineConfig({
  base:
    process.env.GITHUB_ACTIONS === "true" && repositoryName
      ? githubPagesBase
      : "./",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
  },
});
