import http from "http";
import SocketService from "./services/socket";

async function init() {
  const httpServer = http.createServer();
  const PORT = process.env.PORT || 8000;

  SocketService.getIO().attach(httpServer);

  httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

init();
