import { formatTimeAgo } from "../utils/relativeTime";

export default function RelativeDateTime({ datetime }) {
  return <time datetime={datetime}>{formatTimeAgo(datetime)}</time>;
}
