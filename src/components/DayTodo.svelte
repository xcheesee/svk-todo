<script lang="ts">
    export let category: string  = "Afazeres";
    export let title: string;
</script>

<div class="bg-white overflow-y-hidden w-[200px] h-[250px] relative rounded-lg">
    <div class="bg-red-500 flex items-end -translate-y-[70%]  container hover:translate-y-0 transition pt-4">
        <p class="-translate-y-[45%] font-bold text-[#f5f5f4] px-2">{category}</p>
    </div>
    <div class="text-3xl pl-2 pb-4 font-bold">{title}</div>
    <div class="pl-8">
        <div>Descricao</div>
        <div>Prioridade</div>
        <div>Prazo</div>
    </div>
    <div class="absolute w-full bottom-0 flex justify-end px-4 gap-4 my-2">
        <button class="p-2 bg-red-600 rounded text-[#f5f5f4] font-bold flex justify-center items-center"><iconify-icon icon="ri:delete-bin-6-line" width="20" /></button>
        <button class="px-2 bg-blue-600 rounded text-[#f5f5f4] font-bold flex justify-center items-center"><iconify-icon icon="material-symbols:check-small" width="24" /></button>
    </div>
</div>

<style>
</style>

