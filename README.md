# Eleventy, Gulp Boilerplate

A boilerplate for for [Eleventy](https://www.11ty.dev/) and [Gulp](https://gulpjs.com/). :yum:

## Features

- Build sites with the power of [Eleventy](https://www.11ty.dev/docs/)
- [Gulp](https://gulpjs.com/)
- [CSS Base](https://github.com/granttransition/css-base)
- Basic Javascript for menu

## Installation

```
npm install
```

To start the development server (and Gulp), run the `npm run watch` command in terminal. Eleventy has hot reloading baked in and will automatically watch your template files for changes.

## Structure notes

- Gulp calls its tasks from the `gulp-tasks` folder so that the user can pick a choose what they wish to use easily.
- `.src/_assets` is where the raw assets pre processing, upon watching Gulp will move the assets into `.src/includes/assets` where Eleventy will `addPassthroughCopy` into the `dist` directory.

## Ready to deploy?

Type the `npm run production` command to minify scripts, styles.
