# archipelago

Cloudflare Workers provides a serverless execution environment that allows you to create entirely new applications
or augment existing ones without configuring or maintaining infrastructure.

## Requirements

- [Nodejs](https://nodejs.org/en/)

> verify installation: `node -v`

- [Git](https://git-scm.com/)

> verify installation: `git -v`

- [Lerna](https://lerna.js.org/) -> `npm install -g lerna`

> verify installation: `lerna -v`

- [Sign up at Cloudflare Workers](https://dash.cloudflare.com/sign-up/workers)

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

The starter point of the worker is **index.js** if you want to code on another
language: [supported languages](https://developers.cloudflare.com/workers/platform/languages)

For this project was are using JavaScript only since we are managing the project with Lerna.

## Deployment

We use Lerna locally and publish all workers at once, so you need to update your `package.json` with entries for "build"
and "publish", but these entries are not needed for testing a single worker. 

We use a GitHub Action to deploy on merge to main branch but each worker deployment is separate. 

So you will also need to update the workflow **wrangler.yml** and add another entry for your worker, take the example
of `john/package.json`.

Example **.github/workflows/wrangler.yml**

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

Using this example you can change all strings 'my-worker' for your worker name (you need to add it at **jobs:** scope).

## Pseudo Websites with Workers Free 🍬 💃 🕺 😎 

- [Deliver an HTML page from an HTML string directly inside the Worker script](https://developers.cloudflare.com/workers/examples/return-html)
- [The Open Graph protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)  
- [How structured data works](https://developers.google.com/search/docs/guides/intro-structured-data)
- [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [<script>: The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [<style>: The Style Information element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)  
- [Base64 image encoding](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Preview and Generate Open Graph Meta Tags](https://www.opengraph.xyz/)
- [Structured Data Testing Tool - Google](https://search.google.com/structured-data/testing-tool)
- [The W3C Markup Validation Service](https://validator.w3.org/)
- [GTmetrix | Website Speed and Performance Optimization](https://gtmetrix.com/)
- [PageSpeed Insights - Google Developers](https://developers.google.com/speed/pagespeed/insights/)
- [YouTube](https://www.youtube.com/)
- [Emoji cheat sheet](https://github.com/WebpageFX/emoji-cheat-sheet.com)
- [Typer.js](https://steven.codes/typerjs/)
- [EditorConfig](https://editorconfig.org/)
- [Convert your images to base64](https://www.base64-image.de/)
- [GIF to base64 converter](https://onlineimagetools.com/convert-gif-to-base64)
- [Content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network)

## Islands

- [John](https://john.roquesbeach.workers.dev/)
