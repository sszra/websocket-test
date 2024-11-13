import { useState } from "preact/hooks";

export function Action() {
    let ws;
    const [connected, setConnected] = useState<boolean>(false);

    return (
        <div class="flex flex-col gap-2">
            <p>Status: {connected ? "connected" : "not connected"}</p>
            <button class="bg-black rounded-full px-3 py-2 text-white disabled:opacity-50" disabled={connected} onClick={() => {
                ws = new WebSocket("wss://" + location.hostname + "/server");
                ws.onopen = function(_) {
                    setConnected(true);
                }
                ws.onclose = function(_) {
                    setConnected(false);
                }
                console.log(ws)
            }}>Connect</button>
        </div>
    )
}