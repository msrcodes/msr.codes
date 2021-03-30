# msr.codes blog site

[![Netlify Status](https://api.netlify.com/api/v1/badges/83ce6b87-4613-4435-80c8-67c05bf817f4/deploy-status)](https://app.netlify.com/sites/vigilant-hoover-31b733/deploys)

# Installation
// TODO

# 📦 Contentful Migrations

This website uses [Contentful](https://www.contentful.com) as it's headless CMS to provide a smooth editing experience. The content types needed for this project are provided as database migration scripts. These can be installed as follows:

## Create space from migrations
The following instructions will generate the Contentful space from the included migration scripts.
1. Install the Contentful CLI globally
```bash
yarn global add contentful
```
2. Run each migration script in order
```bash
contentful space migration -s ${space_id} -e ${environment} ./src/content/migrations/00-initial.js 
```
```bash
contentful space migration -s ${space_id} -e ${environment} ./src/content/migrations/01-foo.js 
```
```bash
contentful space migration -s ${space_id} -e ${environment} ./src/content/migrations/02-bar.js 
```

## Create migrations from space
This is typically only done during development - likely if you  are forking this website or contributing to it.
1. Install the Contentful CLI globally
```bash
yarn global add contentful
```
2. Run the `space generate migration` command
```bash
contentful space generate migration -s ${space_id} -e master -f ./src/content/migrations ${XX-name}.js  
```