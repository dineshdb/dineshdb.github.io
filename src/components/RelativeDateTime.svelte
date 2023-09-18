<script>
  import { formatTimeAgo } from "../utils/relativeTime";
  export let datetime;
</script>

<time {datetime}>{formatTimeAgo(datetime)}</time>
