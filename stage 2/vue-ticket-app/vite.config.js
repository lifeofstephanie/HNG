import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons(),
  ],
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173,
  },
});
