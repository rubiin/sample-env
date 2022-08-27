import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  format: [
    'esm',
  ],
  dts: true,
  clean: true,
  splitting: true,
  minifyWhitespace: true,
  minifyIdentifiers: true,
})
