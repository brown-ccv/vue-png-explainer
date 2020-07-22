# vue-png-explainer

An explainer inspired by [CFPB's home closing site](https://www.consumerfinance.gov/owning-a-home/closing-disclosure/).

## Installation:

If you haven't logged into the github package repository, you'll need to run:

```bash
npm login --repository https://npm.pkg.github.com
```

If you're using 2FA, you'll need to create a Personal Access Token with all the `repo:` and `read:packages` scopes.
This will be your password when prompted.

After that is taken care of, you can just run:

```bash
npm install @brown-ccv/vue-png-explainer
```

This component is designed to work with the [US Web Design System](https://designsystem.digital.gov/).  Add the below to your `main.js` after importing `Vue` to get styling:

```
import './../node_modules/uswds/dist/css/uswds.min.css';
import './../node_modules/uswds/dist/js/uswds.min.js';
```

## Project setup
```
npm install
```

### Compiles and hot-reloads a demo component for development (requires vue-cli to be globally installed)
```
npm run serve
```

### Compiles and minifies for production
```
npm run build-lib
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
