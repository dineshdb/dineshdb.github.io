<script>
  export let published;
  export let content;
  export let url;
  export let author;

  const date = new Date(published);
  const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  });
  const shortDateFormatterWithYear = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const currentYear = new Date().getFullYear();
  const dateYear = date.getFullYear();
  $: formattedDate = currentYear === dateYear
    ? shortDateFormatter.format(date)
    : shortDateFormatterWithYear.format(date);
</script>

<article class="p-0 py-4 flex border-t border-gray-200 text-white-700 text-xs">
  <img
    class="mr-2 w-24 h-24 rounded block object-cover"
    src={author.photo}
    alt={author.name}
  />
  <div class="flex flex-col pl-2">
    <div>
      <a class="mt-o pt-0 mr-3 font-semibold" href={url}>
        {" "}
        {author.name}{" "}
      </a>
      <span class="pl-2 text-xs">
        <time datetime={date.toISOString()}>{formattedDate}</time>
      </span>
    </div>

    <p class="py-0 my-0">{content?.text?.substring(0, 100)}...</p>
  </div>
</article>
