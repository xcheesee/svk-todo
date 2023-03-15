<script lang="ts">
    export let cat: string = "afazeres"
    export let prio: "baixa" | "media" | "alta" = "media"
    export let time: string = "N/A"
    export let prazo: string = "00:00h"
    const prioColors = {
        baixa: "bg-green-600",
        media: "bg-yellow-500",
        alta: "bg-red-600"
    }
    let title: string = "Lancar a braba"
</script>

<div class="overflow-x-hidden">
    <div class=" h-[50px] bg-white rounded flex justify-between overflow-hidden">
        <div class="flex gap-4 items-center">
            <p>{title}</p>
            <p class="text-sm text-neutral-500 self-end py-2">Ate {prazo}</p>
        </div>
        <div class="flex relative [&>*]:transition">
            <div class="absolute right-0 pr-8 text-neutral-500 text-base self-center">{time}</div>
            <div class="bg-red-500 w-20 pl-4 h-full translate-x-[160%] hover:translate-x-[80%] break-words">
                <p class="text-sm text-[#f5f5f4]">{cat}</p>
            </div>
            <div class={`${prioColors[prio]} w-20 px-4 h-full translate-x-[80%] hover:translate-x-0 break-words`}>
                <p class="text-sm text-center align-center">Prioridade</p>
            </div>
        </div>
    </div>
</div>