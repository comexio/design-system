import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import vuetify from 'vite-plugin-vuetify'; // Local playground
import dts from 'vite-plugin-dts';
import { visualizer } from 'rollup-plugin-visualizer';

import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    // vuetify({ // Local playground setup
    //   autoImport: true,
    //   styles: { configFile: 'src/styles/vuetify.settings.scss' }, // Efeito paralelo: Essa config pega no projeto que está usando a lib
    // }),
    dts(),
    visualizer({
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  // Local playground setup
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@logcomex/modals-design-tokens' as *;
          @use '@logcomex/modals-design-tokens/color' as *;
          @use '@logcomex/modals-design-tokens/font' as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tests': path.resolve(__dirname, './tests'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
      ],
    },
    deps: {
      inline: ['vuetify'],
    },
  },
  build: {
    lib: {
      name: 'LogComex - Modals Components',
      formats: ['es', 'cjs'],
      entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        // 'plugins/index': path.resolve(__dirname, 'src/plugins/index.ts'),
      },
    },
    rollupOptions: {
      external: ['vue', 'vuetify', 'webfontloader'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
      },
    },
  },
});
