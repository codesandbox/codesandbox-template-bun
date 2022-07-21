// http.js
export default {
  port: 3000,
  fetch(request) {
    console.log("Got request: " + request.url);
    return new Response("Welcome to Bun on CodeSandbox!");
  },
};
