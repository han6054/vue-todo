module.exports = (isDev) => {
    return {
        preserveWitespace: true,
        extractCss: !isDev,
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash: base64: 5]',
            camelCase: true
        },
        //hotReload: false,//热重载根据环境变量生成
    }
}