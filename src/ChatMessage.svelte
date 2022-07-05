<script>
  export let message;
  export let sender;

  const messageClass = message.who === sender ? 'sent' : 'received';

  const ts = new Date(message.when);
</script>

<div class={`message ${messageClass}`}>
  
  <p>{message.who}</p>
  <div class="message-text">
    
    <p class="messagestyle">{message.what}</p>

    <time>{ts.toLocaleTimeString()}</time>
  </div>
  
</div>
