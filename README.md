# React JS and Redux Bootcamp - Master React Web Development
<a hef="https://www.udemy.com/certificate/UC-3aca5883-b006-41a1-9f03-4c349c6fc8e7/">
	<img src="./certificate.jpg" width="400" height="300" />
</a>
<hr />

## Section 2:  First React Application

```
nvm ls

nvm install --lts
nvm -version

node --version
npm --version

npx create-react-app portfolio
```

React Project Structure
index.html > index.js > App.js

React DOM, Elements, and JSX

Never Directly Modify State
The reason is React re-calls render() at the end of setState()
setState(); -> render();
When state modified directly, it doesn't call the render method directly.

1. Create /src/data/socialProfiles.js

2. Create /src/SocialProfiles.js
```
class SocialProfile extends Component {}
class SocialProfiles extends Component {}
```
3. Import SocialProfile.js in App.js
```
import SocialProfiles from './SocialProfiles';
<SocialProfiles />
```

### Summary:

**Components**: reusable pieces of React code to control part of the user interface. Components capture the structure of UI, and can have internal data to track the user behavior throughout the lifetime of the app.

**State**: dynamic data in a React component. This is often used to track variables that will be re-rendered in the UI based on events that occur in the application.

👉 Remember the React State Rule: Never Directly Modify State. Instead use the `this.setState` method.

**Props**: data in a React component that gets passed down from its parent. In the parent component, it will pass data down to the child component through attributes in the child component’s JSX.


## Section 3: Breaking down React.
Core Pillars in Web Development - HTML, CSS and JS.

reactjs - babeljs - parcel
```
npm init -y
npm i parcel@2.7.0 --save
npm i react@18.2.0 react-dom@18.2.0 --save
```

import react and reactdom in index.js


modify package.json and add 
```
	"scripts": {
		"start": "parcel index.html"
    }
```

```
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html",
    "start": "npm run build && live-server dist"
  },

```
Bundler - Parcel
Transpilers - Babel

You focused on breaking down React, and React’s relationship with web development overall. In that process, you uncovered some major concepts that all React developers should understand:

There are three core pillars to a web application: html, css, and JavaScript. React.js exists in the JavaScript layer of a web application.

The client-server architecture describes the relationship between a client requesting the documents for a web app (html, css, js) from a server computer that can respond with them.

**Bundling** is the process of taking many JavaScript files and combining them into one giant JavaScript file for the html to refer to. This is useful because the browser doesn’t natively support the import/export system that is used in React projects.

**Parcel-bundler** is a tool that achieves bundling.

**Transpiling** is the process of translating modern JavaScript code into a syntax that the browser actually supports. This is necessary because, as the JavaScript language evolves and adds new features, the browser must keep up and support those additions. Therefore, the feature set that the browser can support will always be a bit behind the overall JavaScript language.

**Babel** is a tool that achieves transpilation.


## Section 4: Continued Main React Concepts

**Lifecycle Methods** - Fire throughout different phases of a component's life.

**componentDidMount()** - Fires when the component is inserted into the DOM \
**componentWillUnmount()** - Fires when the component is going to leave the DOM

**React Router**

```
npm i react-router-dom@6.4.2 --save
npm i history@5.3.0 --save
```
**Summary**

Using the fetch method to make API calls. With the fetch method, React app can make HTTP requests to API services. This is an excellent way to add a ton of new content to your React application.

Applying routing to the application. With **react-router**, a single page React application can transform into one with multiple pages of different content. Each page matches a url path of the application to a different component.

Using higher-order components. A **higher-order component** is one that takes another component as an input. The idea is to treat the component like a function. Have one component as input, and then output an entirely new component based on that input, with new properties, methods, and/or JSX!

## Section 5: Core React Project: Music Master

```
mkdir music-master
cd music-master
npm init -y
npm i parcel@2.7.0 --save
npm i react@18.2.0 react-dom@18.2.0 --save
npm i live-server@1.2.2 --save

cp -r ../portofolio/src ./
```

In this section, you built MusicMaster - an application that hits the Spotify API to get a playable list of the top tracks of any artist. There were a few key topics that appeared while building MusicMaster:

You now have your own React-app-template and create-react-app alternative. With the react-app-template directory, you can bootstrap a React project in under a minute!

User input can be tracked with the `onChange` property. The onChange will pass an event object to a callback function. This contains an `event.target.value` to represent what the user typed into the input element.

In addition, another main goal of this section was to get more practice with the core React concepts. That way, you’re fully prepared to move onto Redux!

## Section 6: Core React Concepts



## Section 7: Redux and more Advanced React

Redux - storage management:
Component (dispatcher) > Action > Reducer > Store
Unidirectional Flow

```
npm i @reduxjs/toolkit@1.8.6 react-redux@8.0.4 --save
```

```
return {
    gameStarted: state.gameStarted,
    instructionExpanded: action.instructionExpanded
};
```

```
return {
    ...state,
    gameStarted: state.gameStarted
};
```

Steps creating a new Component in ReactJS:
1. update ./actions/types.js
2. create or update ./actions
3. create or update ./reducers
4. update ./reducer/index.js (register the new reducer)
5. create ./component
6. add the new component in App.js


```
rm -rf node_modules
```

This section introduced Redux. There are handful of topics related to this whole new layer of building a React application:

**Redux** is a state management technology. It handles all the underlying data for your React application by enforcing a universal flow of data - that components can read from and add to using dispatchable actions.

The **Store** is the global object that collects all the data for a React application.

**Reducers** split up the store and describe how sections of the store should update.

**Actions** are objects full of data that the reducers listen to. These actions are dispatchable by components. And reducers will then use the action data to update the redux store.

**React Redux** provides the connection between the redux system and the React components. Particularly, the Provider component gives each component access to the redux store. And the connect function allows each component to customize what parts of the redux store it wants to read, and what actions the component should be able to dispatch.

**MapStateToProps**, parameter one of the react-redux connect function customizes which part of the redux store the component will have access to.

**MapDispatchToProps**, parameter two of the react-redux connect function specifies which action creators the component should be able to dispatch.

**Redux Middleware** code runs in between the point that an action gets dispatched and the reducers receive the action objects. Think of it as extensions for the redux system; it’s useful for adding new capabilities to the underlying redux logic. One such middleware is redux-thunk.

**Redux thunk** is a library that allows for asynchronous actions to be dispatched. Normally, actions are plain objects. But in the case of using the fetch method, to make an api call, an asynchronous action is useful in order to dispatch different kinds of actions based on the result of the api call.

**LocalStorage** is a JavaScript object that can be used to store items in a key-value structure within the browser.

## Section 8: Redux Project Reaction

As usual, this summary will highlight the main concepts and lessons from this section. In this one, you created the Reaction application. This app is a multi-user application that allows people to post publish messages and react to them with emojis!

This section introduced quite a few new topics:

**Pub/Sub** is a pattern that enables communication in a network based on publishing messages to channels, and subscribing to those messages.

**React context** is a way to share data between many components, without having to manually pass objects down through props.

The **Context Provider Component** uses a value property to provide data to any nested component through its context field.

The **Redux devtools** is an extension that allows you to examine the redux store state, and see actions being dispatched in real time.


## Section 9: Redux Review

**Redux**: A state management library that collects the data for a JavaScript application (most often a React app).

**Store**: An object which collects the data for the entire application.

**Reducers**: Functions which describe how sections of the store should update. They respond to action objects, and take the information from certain actions to update their part of the store.

**Actions**: Plain objects which go through the redux system, that trigger reducers. They must have a `type` field, so that they can be identified by reducers. Actions will contain payloads of information that reducers can use.

**Action creators**: Functions that generate action objects.

**connect()**: A function from the react-redux module which allows you to make the connection between the redux store and a React component. This returns a function itself, the “componentConnector”, in which you pass the actual component name.

**mapStateToProps**: The first argument to the connect function. Allows you to specify what data the component should have from the redux store. You map the redux store state to the props object of the component.

**mapDispatchToProps**: The second argument to the connect function. Allows you to specify what methods should be made available to the component (through props), that will be able to dispatch the results of action creators to the store.

**Async actions**: Asynchronous actions are ones that don’t immediately return action objects. They can have functionality that calls the dispatch method at various places. For example, an async action, wrapped around a fetch, can call dispatch for a successful fetch using the resulting json, or call dispatch for a failed fetch using the error object.

**Redux middleware**: Code that runs in between the point an action gets dispatched, and that action reaches the redux reducers.

**Thunk**: Redux middleware designed to support asynchronous actions. This middleware will hold onto the redux dispatch method, and call dispatch once the data from an async action is ready to be dispatched.

**combineReducers()**: A function which can take multiple reducer functions and combine them into one overall reducer function.

**Same-origin Policy and CORS**: The same-origin policy is a check that the browser implements to ensure that your code isn’t making fetches to unknown origins. Only servers that allow your frontend address as an origin can pass the same origin policy. This concept is also known as CORS (cross-origin resource sharing), which is the mechanism which enforces the matching of origins between the browser client and server.

**Local Storage**:* A key-value structure provided by the browser to store items of information across browser sessions. Don’t store sensitive info in local storage! The storage data is accessible by any web application on the browser.

**Pub/Sub**: A software pattern that allows publishers to send information to channels that subscribers will listen to. A good networking option that can reduce the usual approach of keeping a list of all addresses that are connected to the network.

**React Context**: A way to share data between many React components without having to pass that data down manually through props. A component will look to the nearest parent component, that is a context Provider, to get the values that it can use for its own component `context` field.

**Redux Devtools:** A great browser extension that allows you to read your redux store’s state at any moment, and see the types of dispatching actions in real-time.

*"Store is a collections of all Reducers; And Reducers are configured to responds to Actions object. Those actions are dispatched to the overrall store from a functionality through Components; The Components have the ability to dispatch actions objects to make changes in the store. They also have the ability to read Redux stores data."*


## Section 10: Create Backend APIs for React Apps

```
npm i express@4.16.4 --save
npm i nodemon@1.18.9 --save-dev

npm i request@2.88.0 --save
```

Here’s a highlight reel the main concepts and lessons from this section:

**Express** is a framework built on top of Node.js used for starting servers and building web APIs.

**Express middleware** is functionality that runs before every request, to process information about the request, add headers to the response, perform logging, and any other kind of useful functionality.

**CORS**: Adding the `Access-Control-Allow-Origin` with the `*` argument will allow any frontend addresses to be considered as part of the server’s origin. This helps get past the same origin policy check implemented by the browser.

**API Wrappers** are servers that perform inner requests to other APIs. These can be used to combine multiple API requests into one overall request, to add a more open `Access-Control-Allow-Origin` header, and to accomplish other custom functionality!

Serving a React Frontend can occur within the same server as its backend API. Serve a static directory to the relative path where your React code is built.


## Section 11: React App Deployment
```
heroku create
git commit -m "Topic 114 Heroku Deployment" -m "Prepare code for heroku deployment"
git push heroku master
heroku open
heroku logs tail

git remote set-url heroku <git url>
```
Heroku is a great resource for deploying applications. But another good one for React apps specifically is Netflify. This is like heroku, but specifically for static sites. Essentially, you provide Netlify the static dist directory, and it will host your React app!

## Section 12: React Hooks Section 1 - Dive into Hooks Development

```
npx create-react-app home
```

## Section 13: React Hooks Section 2 - Hooks Under the Hood

## Section 14: React Hooks Section 3 - Reflection on the Why of Hooks

## Section 15: In-Depth Javascript Content









