import { Server } from "socket.io";

class SocketService {
  private io: Server;

  constructor() {
    this.io = new Server();
  }

  public initListeners() {
    const io = this.io;
    io.on("connect", async (socket) => {
      console.log("new socket connected", socket.id);

      socket.on("event:message", ({ message }: { message: string }) => {
        console.log("message received", message);
      });
    });
  }

  getIO() {
    return this.io;
  }
}

export default new SocketService();
