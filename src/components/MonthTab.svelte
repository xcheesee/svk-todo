<script lang="ts">
	import { weekDays } from "../utils/constants";
	import MonthTodo from "./MonthTodo.svelte";
    import type { Todo, Category } from "../utils/types";

    export let todos: Todo[]
    export let cats: Category[]
    let sortedTodos: Todo[][] = new Array(31).fill(0).map(() => new Array(0))
    const date = new Date()
    const today = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const firstOfMonth = new Date(year, month, 1)
    const weekday = firstOfMonth.getDay()
    const getDays = (year: number, month: number) => new Date(year, month, 0).getDate();
    const getDay = (date: string) => date.split("/")[0]
    todos.forEach((todo) => {
        const day = getDay(todo.d || "")
        if(+day - today >= 0 && +day - today < 31) {
            sortedTodos[+day - today] = [...sortedTodos[+day - today], todo]
        }
        console.log(sortedTodos, day, today)
    })
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
    {#if sortedTodos[0][0]}
    <MonthTodo 
        firstDay 
        count={sortedTodos[0].length}
        todo={sortedTodos[0][0]}
        index={0} 
        weekday={weekday}
    />
    {:else}
    <MonthTodo 
        firstDay 
        index={0} 
        weekday={weekday}
    />
    {/if}
    <!-- loop jumps first iteration for week day positioning -->
    {#each Array(monthDays - 1) as _, index}
    {#if sortedTodos[index + 1][0]}
    <MonthTodo index={index + 1} todo={sortedTodos[index + 1][0]} count={sortedTodos[index + 1].length} weekday={weekday} />
    {:else}
    <MonthTodo index={index + 1} weekday={weekday} />
    {/if}
    {/each}
</div>

