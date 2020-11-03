# TopSlice

A small, opinionated, odometer-like pie chart.

## Scripts

Template provided by [nano-react-app](https://github.com/adrianmcli/nano-react-app).

- `npm start` — This will spawn a development server with a default port of `1234`.
- `npm run build` — This will output a production build in the `dist` directory.
- `npm run typecheck` — This will run `tsc --noEmit` which basically just typechecks your project.
- `npm run typewatch` — This will run `tsc --noEmit --watch` which will typecheck your project as you make changes.

## Deploy to GitHub Pages

You can also deploy your project using GitHub pages.
First install the `gh-pages` [package](https://github.com/tschaub/gh-pages):

`npm i -D gh-pages`

With Parcel's `--public-url` flag, use the following scripts for deployment:

```
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html --public-url '.'",
  "predeploy": "rm -rf dist && parcel build index.html --public-url '.'",
  "deploy": "gh-pages -d dist"
},
```

Then follow the normal procedure in GitHub Pages and select the `gh-pages` branch.
