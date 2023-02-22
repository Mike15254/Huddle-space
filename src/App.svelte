<script>
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

  let message = '';
  let messages = [];

  db.onSnapshot((snapshot) => {
    messages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });

  function sendMessage() {
    if (message.trim() !== '') {
      db.add({
        text: message,
        timestamp: new Date().getTime(),
      });
      message = '';
    }
  }
</script>

<h1>Real-Time Messaging App</h1>

<div>
  {#each messages as msg}
    <div>
      <strong>{msg.text}</strong>
      <em>{new Date(msg.timestamp).toLocaleString()}</em>
    </div>
  {/each}
</div>

<form on:submit|preventDefault>
  <input type="text" placeholder="Type your message" bind:value={message} />
  <button type="submit" on:click={sendMessage}>Send</button>
</form>

