<script>
  import {formatDate} from "../utils/relativeTime.ts";
  export let datetime;

  $: date = datetime ? new Date(datetime) : new Date();
</script>

<time {datetime}>{formatDate(date)}</time>
