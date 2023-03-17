<script lang="ts">
	import { prioColors } from "../utils/constants";
    interface Category {
        id: number;
        nome: string;
        cor: string;
    }
    export let cat: Category;
    export let prio: "BAIXA" | "MEDIA" | "ALTA" = "MEDIA"
    export let time: string = "N/A"
    export let prazo: string = "00:00h"
    export let title: string = "Lancar a braba"
</script>

<div class="overflow-x-hidden">
    <div class=" h-[50px] bg-white rounded-xl pl-4 flex justify-between overflow-hidden">
        <div class="flex gap-4 items-center">
            <p>{title}</p>
            <p class="text-sm text-neutral-500 self-end py-2">Ate {prazo}</p>
        </div>
        <div class="flex relative [&>*]:transition">
            <div class="absolute right-0 pr-8 text-neutral-500 text-base self-center">{time}</div>
            <div class="w-20 pl-4 h-full translate-x-[160%] hover:translate-x-[80%] break-words flex items-center" style={`background-color: ${cat.cor}`}>
                <p class="text-sm text-[#f5f5f4] font-bold">{cat.nome}</p>
            </div>
            <div class={`${prioColors[prio]} w-20 px-4 h-full translate-x-[80%] hover:translate-x-0 break-words`}>
                <p class="text-sm text-center align-center">Prioridade</p>
            </div>
        </div>
    </div>
</div>