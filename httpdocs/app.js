import createServer from "next/dist/server/next";
import next from "next";

const port = 3000;
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Server running on port ${port}`);
  });
});
