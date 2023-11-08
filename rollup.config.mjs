import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from "@rollup/plugin-json"; // import the plugin


export default {
  input: 'src/index.ts',
  output: [
    {
      interop: 'auto',
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      interop: 'auto',
      file: 'dist/index.mjs',
      format: 'es',
      esModule: true,
    }
  ],
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
    json()
  ],
  external: [
    'axios',
    'cockatiel',
  ]
};