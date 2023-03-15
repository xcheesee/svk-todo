<script lang="ts">
	import { weekDays } from "../utils/constants";
	import WeekTodo from "./WeekTodo.svelte";
    const date = new Date().getDay()
</script>

<div class="flex flex-col text-3xl gap-8 divide-y-4 divide-neutral-100 px-4">
    <div class="py-4">
        <p>Today</p>
        <div class="grid grid-cols-2 gap-8 px-4">
            <WeekTodo />
            <WeekTodo />
        </div>
    </div>
    <div class="py-4">
        <p>Tomorrow</p>
        <div class="grid grid-cols-2 gap-8 px-4">
            <WeekTodo />
            <WeekTodo />
        </div>
    </div>
    {#each Array(5) as _, i}
    <div class="py-4">
        <div>{weekDays[(date + 2 + i) % 7 ]}</div>
        <div class="grid grid-cols-2 gap-8 px-4">
            <WeekTodo />
        </div>
    </div>
    {/each}
</div>