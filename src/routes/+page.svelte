 <script lang="ts">
	import { invalidate, invalidateAll } from "$app/navigation";
    import "iconify-icon"
	import DayTodo from "../components/DayTodo.svelte";
	import MonthTab from "../components/MonthTab.svelte";
	import TopTab from "../components/TopTab.svelte";
	import WeekTab from "../components/WeekTab.svelte";
    import type { PageData } from "./$types";
    export let data: PageData;
    // async function getTodos() { return await (await fetch("http://localhost:8080/todos")).json()}
    // async function getCategories() {return await (await fetch("http://localhost:8080/cats")).json()};

    let selectedTag: number = 0;
    let datas: string[] = ["Dia", "Semana", "Mes"]
    let formVisible: boolean = false;
    let catFormVisible: boolean = false;
    // let todos: Promise<Todo[]> = getTodos()
    // let categories: Promise<Category[]> = getCategories()
 </script>   
    
    
<div class="grid grid-cols-[200px_1fr] grid-rows-[max-content_1fr] lg:h-[800px] lg:w-[1500px] self-center justify-self-center relative rounded-r-lg">
    <div class="col-start-2 flex tag-selector mx-2">
        {#each datas as data, i}
            {#if selectedTag === i}
            <TopTab active setActive={() => {selectedTag = i}} pos={i} tabName={data}/>
            {:else}
            <TopTab setActive={() => {selectedTag = i}} pos={i} tabName={data}/>
            {/if}
        {/each}
    </div>
    <div class={`bg-red-600 row-start-2 rounded-l-xl flex flex-col py-8 gap-4 items-center text-white font-bold text-2xl`}>
        <p class="hover:bg-red-700 w-full text-center py-2">categoria1</p>
        <p class="hover:bg-red-700 w-full text-center py-2">categoria2</p>
        <div 
            class="rounded-[50%] w-8 h-8 flex justify-center items-center m-2 hover:bg-red-700"
            on:click={() => catFormVisible = true}
            on:keypress={() => catFormVisible = true}
            >
            <iconify-icon icon="ic:baseline-plus" style="color: white" width="24" />
        </div>
    </div>
    <div class="row-start-2 bg-neutral-300 rounded-r-xl relative w-full h-full overflow-y-auto">
        {#await data}
        <p>Carregando...</p>
        {:then {todos, categories}} 
        {#if selectedTag === 0}
        <div class="grid grid-cols-4 py-8 px-4 gap-4 overflow-y-auto">
                { #each todos as todo }
                <DayTodo 
                    title={todo.t || ""} 
                    desc={todo.de ||  ""}
                    dueDate={todo.dd || ""}
                    category={data.categories[todo.cid || 0]}
                />
                { /each }
            </div>
        {:else if selectedTag === 1}
        <WeekTab todos={todos} cats={categories}/>
        {:else}
        <MonthTab todos={todos} cats={categories}/>
        {/if}
        {/await}
        <div 
            class="absolute right-0 top-0 bg-white rounded-[50%] w-8 h-8 flex justify-center items-center m-2"
            on:click={() => formVisible = true}
            on:keypress={() => formVisible = true}
            >
            <iconify-icon icon="ic:baseline-plus" width="24"/>
        </div>
    </div>
</div>
{#if formVisible}
<div class="absolute w-full h-full z-50 flex items-center justify-center" style="background: rgba(0, 0, 0, 0.6);">
    <div class="w-[500px] bg-white rounded-md">
        <form action="" id="todo-form" class="grid grid-cols-[min-content_1fr] gap-4 m-4" 
            on:submit|preventDefault={ async (e) => {
                const formData = new FormData(e.currentTarget)
                formData.append("uid", "0")
                formData.append("don", "false")
                formData.append("id", "0")
                formData.append("d", `${new Date().toLocaleDateString("en-GB")}`)
                const res = await fetch('http://localhost:8080/todos', {
                    method: "POST",
                    body: formData,
                })
                formVisible = false
                invalidate("app:todos")
                }}
        >
            <label for="title" class="text-end">Title</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" id="title" name="t"/>
            <label for="description" class="text-end">Description</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" id="description" name="de"/>
            <label for="priority" class="text-end">Priority</label>
            <select id="priority" name="p" class="border border-neutral-300 w-full rounded-md px-2">
                <option value="BAIXA">Baixa</option>
                <option value="MEDIA">Media</option>
                <option value="ALTA">Alta</option>
            </select>
            <!-- <input class="border border-neutral-300 w-full rounded-md px-2" id="priority" name="p"/> -->
            <label for="deadline" class="text-end">Deadline</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" id="deadline" name="dd"/>
            <label for="category" class="text-end">Categoria</label>
            <select class="border border-neutral-300 w-full rounded-md px-2" id="category" name="cid">
                {#each data.categories as cat}
                <option id={`${cat.id}`} value={cat.id}>{cat.nome}</option>
                {/each}
            </select>
            <div class="col-start-2 flex justify-end">
                <button 
                    class="bg-blue-500 text-white text-xl font-bold px-2 py-1 rounded"
                    >Salvar</button>
            </div>
        </form>
    </div>
</div>
{/if}

{#if catFormVisible}
<div class="absolute w-full h-full z-50 flex items-center justify-center" style="background: rgba(0, 0, 0, 0.6);">
    <div class="w-[500px] bg-white rounded-md">
        <form action="" id="todo-form" class="grid grid-cols-[min-content_1fr] gap-4 m-4" 
            on:submit|preventDefault={(e) => {
                const formData = new FormData(e.currentTarget)
                console.log(formData)
                catFormVisible = false
                }}
        >
            <label for="title" class="text-end">Title</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" id="title" name="title"/>
            <label for="description" class="text-end">Color</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" type="color" id="color" name="color"/>
            <div class="col-start-2 flex justify-end">
                <button 
                    class="bg-blue-500 text-white text-xl font-bold px-2 py-1 rounded"
                    >Salvar</button>
            </div>
        </form>
    </div>
</div>
{/if}

<style>
</style>
