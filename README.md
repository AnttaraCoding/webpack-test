# Webpack And Babel for ReactJS

# Ringkas Webpack
Webpack adalah sebuah module bundler yang berfungsi untuk merangkum semua source code dan merubahanya menjadi static file supaya bisa dijalankan di browser.

# Ringkas Babel
Babel sebuah compailer yang berfungsi untuk merubah seluruh source code yang ada dalam berkas project dan menjadinyakan dinamis dan bisa di jalankan di berbagai versi browser.
[More on that here](https://babeljs.io/blog/2020/03/16/7.9.0#a-new-jsx-transform-11154)


## `Webpack Reactjs`

- Sudah support dengan React (JSX)
- Versi ES Stabil `@babel/preset-env` and `babel-loader`.
- JSX sintak melalui `@babel/preset-react` and `babel-loader`.
- import file `.js | .jsx` tanpa perlu mengetikan extensi nya.
- import file `.css | scss | sass` ke javascript melalui `css-loader | sass-loader`
- support browser lawas dengan style css yang di conversi oleh `postcss-loader`.
- importing images (including `.svg`) melalui CommonJs `import` syntax in javascript and `url()` syntax in css.
- `html-webpack-plugin@next` for outputting an `index.html` from a template for proper production builds support. _NOTE: `html-webpack-plugin` currently recommends installing the @next version for Webpack 5 support_
- `clean-webpack-plugin` for automatic cleanup of the output directory (`dist/`) on each build.

## Start using for a new project, or playground

1. Clone the repo
2. Select the branch you want
3. Run `npm i` to install dependencies
4. Run one of the following commands, depending on intent:

### Production Build

```bash
npm run build-prod
```

### Development Build

```bash
npm run build-dev
```

### Development Server on port :3000

```bash
npm run serve
yarn serve
```

## See output without browser

After running a build command, you can see the output without opening a browser by running:

```bash
node dist/main.js
```
