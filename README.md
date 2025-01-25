# Website

This website is built using [Docusaurus](https://docusaurus.io/). 

The layout of this repository is as follows:

- docs - Contains all the actual content that is part of the guide.
- shared-content - This is where I store all the content that might be included in multiple pages. 
- src - Custom code to help supplement the content.
- static - Static resources for top level things in the site.


## Development 

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
