<script lang="ts">
	import { weekDays } from "../utils/constants";
	import MonthTodo from "./MonthTodo.svelte";

    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const firstOfMonth = new Date(year, month, 1)
    const weekday = firstOfMonth.getDay()
    const getDays = (year: number, month: number) => new Date(year, month, 0).getDate();
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
    <MonthTodo 
        firstDay 
        index={0} 
        day={day} 
        weekday={weekday} 
        prio={"media"} 
        title={"L. a braba"}
        dueDate={"00:00h"}
        />
    <!-- loop jumps first iteration for week day positioning -->
    {#each Array(monthDays - 1) as _, index}
    <MonthTodo index={index + 1} day={day} weekday={weekday} />
    {/each}
</div>

