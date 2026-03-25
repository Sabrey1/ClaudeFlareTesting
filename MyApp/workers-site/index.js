addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond with the static site
 */
async function handleRequest(request) {
  return await getAssetFromKV(request); // This line uses @cloudflare/kv-asset-handler
}