import { build } from 'vite';

console.log('Building main ...');
await build({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['esm'],
    },
    rolldownOptions: {
      external: /^(?![./]\/)/,
      output: {
        postBanner: '/* eslint-disable */ // @ts-nocheck',
        dir: 'dist',
        cleanDir: true,
        entryFileNames: 'index.js',
      },
    },
  },
});

console.log('Building hljs ...');
await build({
  build: {
    // minify: false,
    lib: {
      entry: 'src/vendor/hljs.ts',
      name: 'hljs',
      fileName: 'hljs',
      formats: ['iife'],
    },
    rolldownOptions: {
      output: {
        postBanner: '/* eslint-disable */ // @ts-nocheck',
        dir: 'vendor',
        cleanDir: true,
        entryFileNames: 'hljs.js',
      },
    },
  },
});
