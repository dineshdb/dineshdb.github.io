<script>
  import RelativeDateTime from "./DateTime.svelte";
  export let published;
  export let content;
  export let url;
  export let author;
</script>

<article class="p-0 py-4 flex border-t border-gray-200 text-white-700 text-xs">
  <img
    class="mr-2 w-24 h-24 rounded block object-cover"
    src={author.photo}
    alt={author.name}
  />
  <div class="flex flex-col pl-2 overflow-hidden">
    <div>
      <a class="mt-o pt-0 mr-3 font-semibold" href={url}>
        {" "}
        {author.name}{" "}
      </a>
      <span class="pl-2 text-xs">
        <RelativeDateTime datetime={published} />
      </span>
    </div>

    <p class="py-0 my-0">{content?.text?.substring(0, 100)}...</p>
  </div>
</article>
