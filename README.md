# archipelago

Cloudflare Workers provides a serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure.

## Requirements

- [Nodejs](https://nodejs.org/en/)

> verify installation: `node -v`

- [Git](https://git-scm.com/)

> verify installation: `git -v`

- [Lerna](https://lerna.js.org/) -> `npm install -g lerna`

> verify installation: `lerna -v`

- [sign up at cloudfare workers](https://dash.cloudflare.com/sign-up/workers)

## Getting started

- `npm install -g @cloudflare/wrangler`

- `wrangler --version`

## Creating a new worker

`cd packages`

`wrangler generate my-worker` //<- define the worker name here

`cd my-worker`

`wangler dev` //<- test locally

## Coding

[Examples](https://developers.cloudflare.com/workers/examples)

[Tutorials](https://developers.cloudflare.com/workers/tutorials)

the starter point of the worker is **index.js** if you want to code on another language: [supported languages](https://developers.cloudflare.com/workers/platform/languages)

## Deployment

we use lerna locally and publish all workers at once, so you need to update your package.json with entries for "build" and "publish" but these entries are not needed for testing a single worker. We use a GitHub action to deploy on merge to main branch but each worker deployment is separate. So you will also need to update the workflow **wrangler.yml** and add another entry for your worker, take the example of john/package.json.

and for **.github/workflows/wrangler.yml**

```yml
my-worker:
  runs-on: ubuntu-latest
  name: my-worker
  steps:
    - uses: actions/checkout@v2
    - name: Publish
      uses: cloudflare/wrangler-action@1.3.0
      with:
        apiToken: ${{ secrets.CF_API_TOKEN }}
        workingDirectory: "packages/my-worker"
```

using this example you can change all strings 'my-worker' for your worker name ( you need to add it at **jobs:** scope)
