<script lang="ts">
	import { weekDays } from "../utils/constants";
	import type { Category, Todo } from "../utils/types";
	import WeekTodo from "./WeekTodo.svelte";
    

    //new Array(7).fill(new Array(0)) produz erro porque referencia o mesmo Array(0) para todos indices do Array(7)
    let sortedTodos: Todo[][] = new Array(7).fill(0).map(() => new Array(0)) 
    export let todos: Todo[];
    export let cats: Category[];
    const date = new Date().getDay();
    const today = new Date().getDate();
    const getDay = (date: string) => date.split("/")[0]
    todos.forEach((todo, i) => {
        const day = getDay(todo.d || "")
        if(+day - today >= 0 && +day - today < 7) {
            sortedTodos[+day - today].push(todo) /* = [...sortedTodos[+day - today], todo] */
        }
    })
    console.log(sortedTodos)
</script>

<div class="flex flex-col text-3xl gap-8 divide-y-4 divide-neutral-100 px-4">
    <div class="py-4">
        <p>Today</p>
        <div class="grid grid-cols-2 gap-8 px-4">
            {#each sortedTodos[0] as todo}
            {#if todo && todo.cid !== null}
            <WeekTodo cat={cats[todo?.cid]} prio={todo.p || undefined} time={todo.d || undefined} title={todo.t || undefined}/>
            {/if}
            {/each}
        </div>
    </div>
    <div class="py-4">
        <p>Tomorrow</p>
        <div class="grid grid-cols-2 gap-8 px-4">
            {#each sortedTodos[1] as todo}
            {#if todo && todo.cid !== null}
            <WeekTodo cat={cats[todo.cid]} prio={todo.p || undefined} time={todo.d || undefined} title={todo.t || undefined}/>
            {/if}
            {/each}
        </div>
    </div>
    {#each Array(5) as _, i}
    <div class="py-4">
        <div>{weekDays[(date + 2 + i) % 7 ]}</div>
        <div class="grid grid-cols-2 gap-8 px-4">
            {#each sortedTodos[i + 2] as todo}
            {#if todo && todo.cid !== null}
            <WeekTodo cat={cats[todo.cid]} prio={todo.p || undefined} time={todo.d || undefined} title={todo.t || undefined}/>
            {/if}
            {/each}
        </div>
    </div>
    {/each}
</div>