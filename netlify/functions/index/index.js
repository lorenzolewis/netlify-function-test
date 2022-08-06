// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    if (event.path.startsWith("/sh")) {
      return {
        statusCode: 200,
        body: `I'm coming from sh: ${event.path}`,
      };
    }

    if (event.path.startsWith("/ps")) {
      return {
        statusCode: 200,
        body: `I'm coming from ps: ${event.path}`,
      };
    }
  } catch (error) {
    return {
      statusCode: 200,
      body: `I'm coming from anywhere else: ${event.path}`,
    };
  }
};

module.exports = { handler };

// module.exports = async (request) => {
//   const { pathname } = new URL(request.url);

//   if (
//     pathname.startsWith("/sh") ||
//     pathname.startsWith("/create-tauri-app.sh")
//   ) {
//     return new Response("sh", {
//       headers: { "Content-Type": "text/plain" },
//     });
//   }

//   if (
//     pathname.startsWith("/ps") ||
//     pathname.startsWith("/create-tauri-app.ps1")
//   ) {
//     return new Response("ps", {
//       headers: { "Content-Type": "text/plain" },
//     });
//   }

//   return new Response("catch all", {
//     headers: { "Content-Type": "text/html" },
//   });
// };
