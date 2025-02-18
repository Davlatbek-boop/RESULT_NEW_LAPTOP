const WebSocket = require("ws");
const { v4: uuidv4 } = require("uuid");

const server = new WebSocket.Server({ port: 3000 }, () => {
  console.log("CHATning server qismi 3000 - portda ishga tushdi");
});

server.on("connection", (ws) => {
  console.log("Yangi client ulandi");

  let userId = ""; // Foydalanuvchining ID sini saqlaymiz
  let username = ""; // Foydalanuvchining nomi

  // Foydalanuvchidan nickni so'rash
  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);

      if (!username) {
        // Avval ismni qabul qilish va ID berish
        username = data.user;
        userId = uuidv4(); // Takrorlanmas ID yaratish

        // Foydalanuvchiga ID ni qaytarish
        ws.send(JSON.stringify({ type: "ID", id: userId }));

        console.log(`${username} connected with ID: ${userId}`);
      } else {
        // Yangi xabar yuborish
        if (data.text === "exit") {
          ws.close();
        } else {
          // Barcha clientlarga xabarni yuborish
          server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send(
                JSON.stringify({
                  user: username,
                  text: data.text,
                  userId: userId, // Foydalanuvchi ID sini jo'natish
                })
              );
            }
          });
        }
      }
    } catch (error) {
      console.log("Xato: ", error);
    }
  });

  ws.send(JSON.stringify({ type: "Server", text: "Chatga xush kelibsiz!" }));
});
