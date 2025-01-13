const esbuild = require('esbuild');

const build = (main, outfile) =>
{
    esbuild.buildSync({
        entryPoints: [main],
        outfile: outfile,
        bundle: true,
        loader: {'.js': 'jsx'},
        jsxFactory: 'Xmlx.createElement',
        jsxFragment: 'Xmlx.Fragment',
        define: {'process.env.NODE_ENV': '"production"'},
        minify: true,
        sourcemap: false,
    })  
}

module.exports = build;