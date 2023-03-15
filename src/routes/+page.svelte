 <script lang="ts">
    import "iconify-icon"
	import DayTodo from "../components/DayTodo.svelte";
	import MonthTab from "../components/MonthTab.svelte";
	import TopTab from "../components/TopTab.svelte";
	import WeekTab from "../components/WeekTab.svelte";
    let selectedTag: number = 0;
    let datas: string[] = ["Dia", "Semana", "Mes"]
    let formVisible: boolean = false;
    let catFormVisible: boolean = false;
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
        {#if selectedTag === 0}
        <div class="grid grid-cols-4 py-8 px-4 gap-4 overflow-y-auto">
            { #each Array(20) as _ }
                <DayTodo title="pog" />

                { /each }
            </div>
        {:else if selectedTag === 1}
        <WeekTab />
        {:else}
        <MonthTab />
        {/if}
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
            on:submit|preventDefault={(e) => {
                const formData = new FormData(e.currentTarget)
                console.log(formData)
                formVisible = false
                }}
        >
            <label for="title" class="text-end">Title</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" id="title" name="title"/>
            <label for="description" class="text-end">Description</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" id="description" name="desc"/>
            <label for="priority" class="text-end">Priority</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" id="priority" name="prio"/>
            <label for="deadline" class="text-end">Deadline</label>
            <input class="border border-neutral-300 w-full rounded-md px-2" id="deadline" name="dl"/>
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
            <input class="border border-neutral-300 w-full rounded-md px-2" id="description" name="desc"/>
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
