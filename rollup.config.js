import VuePlugin from 'rollup-plugin-vue'
import ExtensionsPlugin from 'rollup-plugin-extensions'

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
        })
    ]
}
