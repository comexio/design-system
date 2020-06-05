import VuePlugin from 'rollup-plugin-vue'
import ExtensionsPlugin from 'rollup-plugin-extensions'
import scss from 'rollup-plugin-scss'

export default {
    input: 'src',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        VuePlugin(),
        ExtensionsPlugin({
            extensions: ['.js', '.vue'],
        }),
        scss()
    ]
}
