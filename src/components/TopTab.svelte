<script lang="ts">
    export let tabName: string;
    export let active: boolean = false;
    export let setActive: () => void;
    export let pos: number;
</script>

<div class={`relative ${active ? "z-30" : ""}`} on:mouseover={setActive} on:focus={setActive}>
    <div class={`${active ? "bg-neutral-300 z-30" : "bg-red-500"} px-5 rounded-t-md relative`}>{tabName}</div>
    <div class={`eased-out -left-[10px] ${active ? "block" : "hidden"}`}>
        <div class="square top-[20px] relative bg-neutral-300"></div>
        <div class={`circle relative -left-[10px] ${pos === 0 ? "bg-white" : "bg-red-500"}`}></div>
    </div>
    <div class={`eased-out -right-[20px] ${active ? "block" : "hidden"}`}>
        <div class="square top-[20px] relative bg-neutral-300"></div>
        <div class={`circle relative ${pos === 2 ? "bg-white" : "bg-red-500"}`}></div>
    </div>
</div>

<style>
    .eased-out {
        position: absolute;
        bottom: 0;
    }
    .square {
        width:10px;
        height: 10px;
    }
    .circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
</style>