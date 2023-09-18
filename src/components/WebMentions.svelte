<script>
  import WebMention from "./WebMention.svelte";
  const url = `https://webmention.io/api/mentions.jf2?target=${window.location.href}`;
  const res = fetch(url).then((res) => res.json());
</script>

{#await res then result}
  {#if result.children.length > 0}
    <footer class="p-4 border-1 border-gray-200">
      <hr />
      <h2>Web Mentions</h2>
      {#each result.children as child}
        <WebMention {...child} />
      {/each}
    </footer>
  {/if}
{/await}
