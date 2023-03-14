<script lang="ts">
    const date = new Date().getDay()
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    console.log(weekday[date % 7])
</script>

<div class="flex flex-col text-3xl">
    <div class="overflow-x-hidden">
        <p>Today</p>
        <div class=" h-[50px] bg-white rounded flex justify-between">
            <div>
                <p>Title</p>
            </div>
            <div class="flex">
                <div class="bg-red-500 w-20 px-4 h-full translate-x-[150%] hover:translate-x-[65%] break-words">
                    <p class="text-sm">categoria</p>
                </div>
                <div class="bg-orange-500 w-16 px-4 h-full translate-x-[80%] hover:translate-x-0 break-words">
                    <p class="text-sm">prioridade</p>
                </div>
            </div>
        </div>
    </div>
    <div>
        <p>Tomorrow</p>
        <div class=" h-[50px] bg-white"></div>
    </div>
    {#each Array(5) as _, i}
    <div>{weekday[(date + 2 + i) % 7 ]}</div>
    {/each}
</div>