export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);

    if (
      pathname.startsWith("/sh") ||
      pathname.startsWith("/create-tauri-app.sh")
    ) {
      return new Response("sh", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    if (
      pathname.startsWith("/ps") ||
      pathname.startsWith("/create-tauri-app.ps1")
    ) {
      return new Response("ps", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    return new Response("catch all", {
      headers: { "Content-Type": "text/html" },
    });
  },
};
