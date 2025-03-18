// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure build files go to the correct folder
    emptyOutDir: true,
  },
  server: {
    historyApiFallback: true, // Fixes 404 errors for non-root routes
  },
});

