<script>
  export let message;
  export let sender;

  const messageClass = message.who === sender ? 'sent' : 'received';

  let username=message.who;
  console.log(username);

  const ts = new Date(message.when);
</script>

<div class={`message ${messageClass}`}>
  {#if $username !="undefined"}
  <p>{message.who}</p>
  <div class="message-text">

    <p>{message.what}</p>

    <time>{ts.toLocaleTimeString()}</time>
  </div>
  {/if}
</div>
