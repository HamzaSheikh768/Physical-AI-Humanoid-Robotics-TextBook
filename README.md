# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Spec Management

### Mark Spec as Complete

To mark a feature specification file as 'Complete', use the `mark-spec-complete.js` script:

```bash
node .specify/scripts/mark-spec-complete.js specs/<feature-name>/spec.md
```

Replace `<feature-name>` with the actual directory name of your feature. For example:

```bash
node .specify/scripts/mark-spec-complete.js specs/1-spec-read-completion/spec.md
```

This will update the 'Status' field in the specified `spec.md` file to 'Complete'.

### Generate Consolidated Spec Report

A consolidated summary report of all `spec.md` files, including their paths, extracted status, and identified clarifications, was generated and displayed directly in the conversation. You can view the full report by reviewing the conversation history.


