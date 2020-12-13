# Can't seem to import Python libraries
from datetime import date
from jdk.internal.net.http import Response


def handleRequest(request):
    t = datetime.datetime.now()
    d1 = now.year
    return __new__(Response('Python Worker hello world %s !!!' % d1, {
        'headers' : { 'content-type' : 'text/plain' }
    }))

addEventListener('fetch', (lambda event: event.respondWith(handleRequest(event.request))))
