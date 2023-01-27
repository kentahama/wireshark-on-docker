import { serve } from "https://deno.land/std@0.174.0/http/server.ts";
const PREFIX = "<";
const SUFFIX = ">";

serve(
  (req) => {
    const { response, socket } = Deno.upgradeWebSocket(req);
    socket.onopen = (_event) => console.log("new client connected");
    socket.onclose = (_event) => console.log("client connection closed");
    socket.onmessage = (event) => {
      console.log("get:", event.data);
      const echo = PREFIX + event.data + SUFFIX;
      socket.send(echo);
    };

    return response;
  },
  { port: 5000 }
);
