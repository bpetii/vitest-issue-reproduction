import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    // loader: "tsx",
    // include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  test: {
    globals: true,
    setupFiles: ['./vitest.setup.js'],
    environment: "jsdom",
  }
})
