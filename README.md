# React boilerplate
A boilerplate to start a client-side project using React. Largely based on the [React Boilerplate](https://github.com/rbartoli/react-boilerplate) project by [Riccardo Bartoli](http://rblab.com) but tweaked to suit my needs. 

I've extended this README  a little futher with ideas and methodolgies I think I need to follow on future React projects.

## Features
- [ES2015](https://babeljs.io/docs/learn-es2015)
- [React](https://github.com/facebook/react)
- [React Router](https://github.com/reactjs/react-router)
- [CSS modules](https://github.com/css-modules/css-modules)
- [PostCSS](http://postcss.org)

## Tools
- [Webpack](https://github.com/webpack/webpack)
    - [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with HMR support
    - [webpack-notifier](https://github.com/Turbo87/webpack-notifier)
- [Babel 6](https://github.com/babel/babel) with presets for:
    - ES2015 using [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
    - React using [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
    - React HMR and error catching using [babel-preset-react-hmre](https://github.com/babel/babel/tree/master/packages/babel-preset-react-hmre)
- [ESLint](https://github.com/eslint/eslint) configured to:
    - use Babel 6 as parser using [babel-eslint](https://github.com/babel/babel-eslint)
    - lint page on save using [eslint-loader](https://github.com/MoOx/eslint-loader)

## Hot Module Replacement (HMR) in action
![ScreenShot](https://cloud.githubusercontent.com/assets/983189/12616751/91833172-c504-11e5-87e9-f36efbd1d17c.gif)

As you can see the HMR is working without reloading the page for React components and styles.

## Getting started
```bash
$ git clone https://github.com/iamjordanbrophy/react-boilerplate.git
$ npm i
$ npm start
```
$ Go to [http://localhost:8080](http://localhost:8080)

---

# *Notes*
*Notes for myself on how I'd like to do certain things in future projects:*

## Folder Structure ideas

- Global/General components at the root of the `./components` folder because they can be reused in multiple places.
- Most components can be reused a few times but probably not across the whole project. So, organise them into folders of modules containing a few components.

Here's an example of file  structure for the time/weather component used in GoMetro TV:

![example picture](src/TV-weather.png)
```
- InfoModule
- - TimeModule
- - - Time.js
- - - Time.css
- - WeatherModule
- - - WeatherContainer.js
- - - Weather.css
- - - Temperature.js
- - - Icon.js
```

This `InfoModule` can be placed at the root of the components directory so that it can be reused somewhere else if need be without messing up the file structure.

