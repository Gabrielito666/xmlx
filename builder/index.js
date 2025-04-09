const esbuild = require('esbuild');

const build = (main, outfile, {platform="node", minify=true, sourcemap=false}) =>
{
    esbuild.buildSync({
        entryPoints: [main],
        outfile: outfile,
        bundle: true,
        loader: {'.js': 'jsx'},
        jsxFactory: 'Xmlx.createElement',
        jsxFragment: 'Xmlx.Fragment',
        define: {'process.env.NODE_ENV': '"production"'},
        minify,
        sourcemap,
        platform
    })  
}

module.exports = build;