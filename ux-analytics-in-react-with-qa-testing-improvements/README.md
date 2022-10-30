# UX analytics in react with QA testing improvements

A tutorial around this code can be found here:

- youtube-intro
- dev.to-post
- shnyder.com repost

# Welcome

Working in a team to build a product? Maybe with non-technical people - or technical people who are not developers?

You probably...

- ...need testing at some point
- ...need to explain how a page works, or why it doesn't
- ...want to have usage data for that argument
- ...want to avoid extra work
  So we'll take a common task you need to do for testing. That task is _adding custom attributes_. It's independent of the library, be it jest, puppeteer, cypress, selenium or others, because it works with html attributes. In HTML5, you can add custom attributes, and testing libraries use that for identifying elements which aren't necessarily unique on a page. Commonly the attribute "data-qa-id" is used, or at least it's the one that gives you stackoverflow answers. "data-cy" is used in the case of cypress, and others are possible as well.

# HTML5's "data-qa-id" attributes

Good news: You can reuse your Quality Assurance testing for usage analysis.

In this tutorial, we'll look at a page for users.
The page contains nothing but the agile manifesto in different languages and a button at the end.

We'll see

- how to fire events when the user scrolls and clicks
- How the resulting usage data can be displayed in a chart
- how we can give our non-technical colleagues an overview which elements on a page are responsible

Even if you're not doing browser-based testing yet, by including these attributes you'll make life easier for a future tester-colleague. In the meantime you'll have a couple of reusable functions for learning more about your users.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
