module.exports = {
    publicPath: '/Shraav-sMindPalace/',
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}