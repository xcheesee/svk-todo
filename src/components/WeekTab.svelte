<script lang="ts">
	import { weekDays } from "../utils/constants";
	import WeekTodo from "./WeekTodo.svelte";
    
    interface Todo {
        cid: number,
        t: string;
        de: string;
        p: "BAIXA" | "MEDIA" | "ALTA"
        d: string;
        dd: string;
        don: boolean;
    }

    interface Category {
        id: number;
        nome: string;
        cor: string;
    }

    const sortedTodos: Todo[][] = []
    export let todos: Todo[];
    export let cats: Category[];
    const date = new Date().getDay();
    const today = new Date().getDate();
    const getDay = (date: string) => date.split("/")[0]
    todos.forEach(todo => {
        const day = getDay(todo.d)
        if(+day - today >= 0) {
            sortedTodos[+day - today].push(todo)
        }
    })


</script>

<div class="flex flex-col text-3xl gap-8 divide-y-4 divide-neutral-100 px-4">
    <div class="py-4">
        <p>Today</p>
        <div class="grid grid-cols-2 gap-8 px-4">
            {#each sortedTodos[0] as todo}
            <WeekTodo cat={cats[todo.cid]} prio={todo.p} time={todo.d} title={todo.t}/>
            {/each}
        </div>
    </div>
    <div class="py-4">
        <p>Tomorrow</p>
        <div class="grid grid-cols-2 gap-8 px-4">
            {#each sortedTodos[1] as todo}
            <WeekTodo cat={cats[todo.cid]} prio={todo.p} time={todo.d} title={todo.t}/>
            {/each}
        </div>
    </div>
    {#each Array(5) as _, i}
    <div class="py-4">
        <div>{weekDays[(date + 2 + i) % 7 ]}</div>
        <div class="grid grid-cols-2 gap-8 px-4">
            {#each sortedTodos[i + 2] as todo}
            <WeekTodo cat={cats[todo.cid]} prio={todo.p} time={todo.d} title={todo.t}/>
            {/each}
        </div>
    </div>
    {/each}
</div>