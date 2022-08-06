// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// const handler = async (event) => {
//   try {
//     const subject = event.queryStringParameters.name || "World";
//     return {
//       statusCode: 200,
//       body: JSON.stringify({
//         message: `Hello ${subject}, you're coming from this path: ${event.path}`,
//       }),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     };
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() };
//   }
// };

// module.exports = { handler };

module.exports = async (request) => {
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
};
