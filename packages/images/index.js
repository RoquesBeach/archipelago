const destinationURL = "https://duckduckgo.com/?t=ffab&q=LosRoques&iax=images&ia=images"
const statusCode = 301

async function handleRequest(request) {
  return Response.redirect(destinationURL, statusCode)
}

addEventListener("fetch", async event => {
  event.respondWith(handleRequest(event.request))
})
