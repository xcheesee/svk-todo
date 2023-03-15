<script lang="ts">
	import { weekDays } from "../utils/constants";

    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const firstOfMonth = new Date(year, month, 1)
    const weekday = firstOfMonth.getDay()
    const getDays = (year: number, month: number) => { return new Date(year, month, 0).getDate(); };
    const monthDays = getDays(year, month + 1)
    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ]
</script>

<div class="grid grid-cols-7 w-full pl-8 gap-4">
    <h2 class="col-span-7 py-4 font-bold text-3xl">{months[month]}</h2>
    {#each weekDays as wDay}
    <p class="pt-4 pb-8">{wDay}</p>
    {/each}
    <div class="flex flex-col justify-start items-start rounded-lg overflow-hidden" style={`grid-column-start: ${weekday + 1};`}>
        <p class={`${day > 0 ? "text-neutral-500" : "text-red-500"} w-full`}>
            1
        </p>
        <p class="self-center text-lg font-bold pb-4 tracking-wider">Title</p>
        <p class="self-end justify-self-end">Due Date</p>
        <div class="bg-red-500 h-4 w-full"></div>
    </div>
    <!-- loop jumps first iteration for week day positioning -->
    {#each Array(monthDays - 1) as _, index}
    <div class="flex flex-col justify-start items-start">
        <p class={`${index < day ? "text-neutral-500" : "text-red-500"} w-full h-[100px]`}>
            {index + 2}
        </p>
    </div>
    {/each}
</div>

