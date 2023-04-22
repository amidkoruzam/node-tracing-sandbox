const http = require("http");
const module1 = require("./module-1");

async function getReponse() {
  return new Promise(function startTimer(resolve) {
    setTimeout(function getString() {
      const hi = module1.sayHi();
      resolve(hi);
    }, 2000);
  });
}

const server = http.createServer(async function handleRequest(req, res) {
  const str = await getReponse();
  res.end(str);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
