module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Shraav-sMindPalace/' : '/',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}