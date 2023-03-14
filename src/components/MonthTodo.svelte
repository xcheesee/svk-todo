<script lang="ts">
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const getDays = (year: number, month: number) => { return new Date(year, month, 0).getDate(); };
    const monthDays = getDays(year, month + 1)
    console.log(monthDays)
    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November", 
        "December"
    ]
</script>

<div class="grid grid-cols-7 w-full">
    <h2 class="col-span-7">{months[month]}</h2>
    {#each Array(monthDays) as _, index}
    <div class="flex justify-start items-start">
        <p class={`${index < day ? "text-neutral-500" : "text-red-600"} w-full h-[100px] text-white`}>{index + 1}</p>
    </div>
    {/each}
</div>

