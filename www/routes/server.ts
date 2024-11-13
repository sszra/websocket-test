import { define } from "../utils.ts";

export const handler = define.handlers({
    GET(ctx) {
        if (ctx.req.headers.get("upgrade") === "websocket") {
            const { socket, response } = Deno.upgradeWebSocket(ctx.req);
            socket.onopen = function(_) {
                console.log("Connected");
            }
            socket.onclose = function(_) {
                console.log("disconnected");
            }
            return response;
        } else {
            return new Response(null, { status: 501 })
        }
    }
})