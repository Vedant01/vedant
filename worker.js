addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Forward request to the static assets or your application
  const url = new URL(request.url);
  try {
    // Attempt to serve the requested resource
    const response = await fetch(request);
    return response;
  } catch (error) {
    // Return a 404 for missing resources
    return new Response('Not Found', { status: 404 });
  }
}