const bookingURL = "https://www.booking.com/region/ve/los-roques.html"
const losRoquesURL = "https://en.wikipedia.org/wiki/Los_Roques_archipelago"
const cayoGrande = "https://es.wikipedia.org/wiki/Cayo_Grande_(Los_Roques)"
const statusCode = 301

async function handleRequest(request) {
  const rand = Math.random()
  const where = rand < 0.33 ? bookingURL : (rand < 0.67 ? losRoquesURL : cayoGrande)
  return Response.redirect(where, statusCode)
}

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})
