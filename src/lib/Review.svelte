<script lang="ts">
  export let review: any;
</script>

<article class="px-9 py-5 gap-3 flex flex-col items-center bg-white dark:bg-neutral-800 rounded-xl shadow">
  <div class="text-xl">
    {#each new Array(review.rating).fill("") as star}
      ⭐️
    {/each}
  </div>
  <p class="font-">{review.content}</p>
  <img class="" src={review.img} alt="male icon" height="80px" width="80px"/>
  <div>
    <p class="text-xl font-">{review.author}</p>
    <p>{review.context}</p>
  </div>
</article>
