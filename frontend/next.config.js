const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const tailwindCss = require('tailwindcss')

module.exports = withCSS(withSass({
    webpack (config, options) {
        const rules = [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: [tailwindCss('./tailwind.config.js')]
                    }
                },
                {loader: 'sass-loader'},
            ]
        }]

        return {
            ...config,
            module: {
                ...config.module,
                rules: [...config.module.rules, ...rules]
            }
        }
    }
}));