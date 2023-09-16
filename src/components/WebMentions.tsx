import useSWR from "swr";
import { formatTimeAgo } from "../utils/relativeTime";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Greeting() {
  const url = `https://webmention.io/api/mentions.jf2?target=${window.location.href}`;
  const { data: result, error } = useSWR(url, fetcher);

  if (error || !result || result.children?.length === 0) return <></>;

  return (
    <footer class="p-4 border-1 border-gray-200">
      <hr />
      <h2>Web Mentions</h2>
      {result.children.map((child) => (
        <Mention {...child} />
      ))}
    </footer>
  );
}

function Mention({ url, author: { name, photo }, published, content }) {
  return (
    <article class="p-0 py-4 flex border-t border-gray-200  text-white-700 text-xs">
      <img
        class="mr-2 w-24 h-24 rounded block object-cover"
        src={photo}
        alt={name}
      />
      <div class="flex flex-col pl-2 overflow-hidden">
        <div>
          <a class="mt-o pt-0 mr-3 font-semibold" href={url}>
            {" "}
            {name}{" "}
          </a>
          <span class="pl-2 text-xs">
            <time title={published}>{formatTimeAgo(published)}</time>
          </span>
        </div>

        <p class="py-0 my-0">{content?.text?.substring(0, 200)}...</p>
      </div>
    </article>
  );
}
