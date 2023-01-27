const URL = Deno.env.get("URL") ?? "ws://localhost:5000";

function main() {
  const ws = new WebSocket(URL);
  ws.onmessage = (event) => console.log("get:", event.data);
  ws.onopen = () => {
    setInterval(() => {
      const data = "Hello";
      ws.send(data);
    }, 2_000);
  };
}

setTimeout(main, 5_000);
