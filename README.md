## Structure

The codebase is in typescript and and has two pages with a search field in AppBar for searching through persisted data.

1. HomePage: This page has the list of items persisted in the local indexed db using redux. Which supports categories filtering and price range filtering.
2. Product Page: This page has the product details and the product review. user can post a review as anonymous user and store the reviews in local indexed DB.

The folder structure is as follows:

```hash

└── src
    ├── app: This has all the entry point/single use components for app initialization.
    ├── components: This has all the global components which can be reused across pages/app.
    ├── hooks: Application related custom hooks.
    ├── types: This has the data models(types) which are used in the app.
    ├── pages: This the Route based Page components and related components inside it.
    ├── redux: This dir has all the redux related logic and initialization along with its persistence and types.
    └── utils: This dir has all the helper functions.
```

## Deployed URL

### `https://voluble-eclair-be6441.netlify.app/`

## Node Version: 

### `v18.16.0`

## Scripts

### `yarn install`

Installs the required dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Libraries

| Name          | Purpose                                              |
| :------------ | :--------------------------------------------------- |
| React Router  | For page routing                                     |
| Redux         | For state management                                 |
| Saga          | For async operations to be called with redux actions |
| redux-persist | for local state persistence                          |
| localForage   | Indexed db for persistence to be used with           | redux-persist |
| MUI           | For UI styling                                       |
