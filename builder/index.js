const esbuild = require('esbuild');

/**
 * Compila y agrupa un archivo JavaScript/JSX utilizando esbuild.
 *
 * @param {string} main - Ruta del archivo de entrada principal (entry point).
 * @param {string} outfile - Ruta del archivo de salida que se generará.
 * @param {import('esbuild').BuildOptions} [options={}] - Opciones adicionales para configurar la compilación. 
 * Puedes sobrescribir cualquier configuración por defecto aquí, como `platform`, `loader`, `define`, etc.
 *
 * @example
 * build('src/index.js', 'dist/bundle.js', {
 *   sourcemap: true,
 *   minify: false,
 *   define: { 'process.env.NODE_ENV': '"development"' }
 * });
 */
const build = (main, outfile, options = {}) => {
    options.platform ||= "node";
    options.minify ||= true;
    options.sourcemap ||= false;

    esbuild.buildSync({
        entryPoints: [main],
        outfile: outfile,
        bundle: true,
        loader: { '.js': 'jsx' },
        jsxFactory: 'Xmlx.createElement',
        jsxFragment: 'Xmlx.Fragment',
        define: { 'process.env.NODE_ENV': '"production"' },
        ...options,
    });
};

module.exports = build;