 <script lang="ts">
    import "iconify-icon"
	import DayTodo from "../components/DayTodo.svelte";
	import TopTab from "../components/TopTab.svelte";
    let selectedTag: number = 0;
    let datas: string[] = ["Dia", "Mes", "Ano"]
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
    <div class={`bg-red-600 row-start-2 rounded-l-xl flex flex-col py-8 gap-4 items-center `}>
        <p>categoria1</p>
        <p>categoria2</p>
        <div class="rounded-[50%] w-8 h-8 flex justify-center items-center m-2">
            <iconify-icon icon="ic:baseline-plus" style="color: white" width="24" />
        </div>
    </div>
    <div class="row-start-2 bg-neutral-300 rounded-r-xl grid grid-cols-4 py-8 px-4 gap-4 relative overflow-y-auto w-full h-full">
        { #each Array(3) as _ }
            <DayTodo title="pog" />
        { /each }
        <div class="absolute right-0 bg-white rounded-[50%] w-8 h-8 flex justify-center items-center m-2">
            <iconify-icon icon="ic:baseline-plus" width="24"/>
        </div>
    </div>
</div>

<style>
</style>
