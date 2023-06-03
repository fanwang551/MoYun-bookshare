module.exports = {
    transpileDependencies: ["vuetify"],
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        },
        disableHostCheck: true 
    },
    publicPath: '/',
    outputDir: 'dist'
};