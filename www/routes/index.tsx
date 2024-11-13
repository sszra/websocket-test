import { define } from "../utils.ts";
import { Action } from "../islands/Action.tsx";

export default define.page((_ctx) => {
    return (
        <div class="flex flex-col p-4">
            <p>Tes websocket</p>
            <Action />
        </div>
    )
})