import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";


export default {
  input: 'src/content.ts',
  output: { file: 'content.js', format: 'esm' },
  plugins: [
    nodeResolve(),
    typescript(),
    process.env.min ? terser() : {}
  ]
}