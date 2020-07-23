import VuePlugin from 'rollup-plugin-vue'
import ExtensionsPlugin from 'rollup-plugin-extensions'
import styles from "rollup-plugin-styles"
import alias from '@rollup/plugin-alias'
import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        VuePlugin(),
        ExtensionsPlugin({
            extensions: ['.js', '.vue', '.ts'],
        }),
        typescript({
            diagnostics: false,
            esModuleInterop: true,
            allowJs: true,
            strict: true,
            noEmit: true,
            exclude: ["*/**.spec.ts", "*/**/**.spec.ts"],
            allowSyntheticDefaultImports: true,
            skipLibCheck: true,
            target: "es2018",
            module: "esnext",
            moduleResolution: "node"
        }),
        styles(),
        alias({
          entries: [
            { find: '@', replacement: __dirname },
            { find: 'appRoot', replacement: __dirname },
          ]
        })
    ]
}
