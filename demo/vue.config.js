module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "@/../../src/assets/scss/_variables.scss";
                `
            }
        }
    }
}
