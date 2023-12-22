<script>
  import {formatDate} from "../utils/relativeTime.ts";
  export let datetime;

</script>

<time {datetime}>{formatDate(new Date(datetime))}</time>
