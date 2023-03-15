<script lang="ts">
	import { prioColors } from "../utils/constants";
    export let day: number;
    export let index: number;
    export let weekday: number;
    export let title: string = ""
    export let dueDate: string = ""
    export let prio: "baixa" | "media" | "alta" | "" = ""
    export let firstDay: boolean = false;
</script>


<div class="flex flex-col justify-start items-start rounded-lg overflow-hidden" style={`grid-column-start: ${firstDay ? weekday + 1 : ""};`}>
    <p class={`${day > index + 1 ? "text-neutral-500" : "text-red-500"} w-full`}>
        {index + 1}
    </p>
    <p class="self-center text-lg font-bold pb-4 tracking-wider h-[60px]">{title}</p>
    <p class="self-end justify-self-end text-neutral-500">{dueDate === "" ? "" : `Ate ${dueDate}`}</p>
    <div class={`${prio != "" ? prioColors[prio] : ""} h-4 w-full`}></div>
</div>