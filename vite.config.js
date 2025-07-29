import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     eslint(),
//   ],
// });
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnWarning: false,
      failOnError: false,
    }),
  ],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";

// export default defineConfig({
//   plugins: [
//     react(),
//     eslint({
//       failOnWarning: false,
//       failOnError: false,
//     }),
//   ],
//   server: {
//     hmr: {
//       overlay: false, // disables the red error overlay in the browser
//     },
//   },
// });
