<script lang="ts">
    export let category: {name: string, color: string}  = {name: "afazeres", color: "#ef4444"};
    export let title: string;
    export let desc: string;
    export let prio: "baixa" | "media" | "alta" = "baixa";
    export let dueDate: string;
</script>

<div class="bg-white overflow-y-hidden w-[200px] h-[250px] relative rounded-lg">
    <div class={`flex items-end -translate-y-[70%]  container hover:translate-y-0 transition pt-4`} style={`background-color: ${category.color};`}>
        <p class="-translate-y-[45%] font-bold text-[#f5f5f4] px-2">{category.name}</p>
    </div>
    <div class="text-3xl pl-2 pb-4 font-bold">{title}</div>
    <div class="pl-8">
        <div>{desc}</div>
        <div>{prio}</div>
        <div>{dueDate}</div>
    </div>
    <div class="absolute w-full bottom-0 flex justify-end px-4 gap-4 my-2">
        <button class="p-2 bg-red-600 rounded text-[#f5f5f4] font-bold flex justify-center items-center"><iconify-icon icon="ri:delete-bin-6-line" width="20" /></button>
        <button class="px-2 bg-blue-600 rounded text-[#f5f5f4] font-bold flex justify-center items-center"><iconify-icon icon="material-symbols:check-small" width="24" /></button>
    </div>
</div>

<style>
</style>

