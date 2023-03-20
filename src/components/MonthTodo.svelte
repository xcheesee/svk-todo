<script lang="ts">
	import { prioColors } from "../utils/constants";
	import type { Todo } from "../utils/types";
    // export let day: number;
    export let index: number;
    export let weekday: number;
    export let count: number = 0;
    // export let prio: "BAIXA" | "MEDIA" | "ALTA" | "" = ""
    export let firstDay: boolean = false;
    export let todo: Todo = {
        cid: null,
        t: null,
        de: null,
        p: null,
        d: null,
        dd: null,
        don: null,
    };
</script>

<div class="relative" style={`grid-column-start: ${firstDay ? weekday + 1 : ""};`}>
    {#if count > 1}
    <div class="absolute w-6 h-6 flex justify-center items-center text-xs rounded-full bg-red-500 right-0 -translate-y-full text-center">+{count - 1}</div>
    {/if}
    <div class="flex flex-col justify-start items-start rounded-lg overflow-hidden" >
        <p class={`${todo?.d || -1 > index + 1 ? "text-neutral-500" : "text-red-500"} w-full`}>
            {index + 1}
        </p>
        <p class="self-center text-lg font-bold pb-4 tracking-wider h-[60px]">{todo?.t ? todo?.t : ""}</p>
        <p class="self-end justify-self-end text-neutral-500">{todo?.dd ? `Ate ${todo?.dd}` : ""}</p>
        <div class={`${todo.p ? prioColors[todo.p] : ""} h-4 w-full`}></div>
    </div>
</div>