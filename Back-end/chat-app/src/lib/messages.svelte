<script lang="js">
  import { onMount, onDestroy } from 'svelte';
  import { currentUser, pb } from './pocketbase';

  let newMessage;
  let messages = [];

  onMount(async () => {
    // Get initial messages
    const resultList = await pb.collection('messages').getList(1, 50, {
      sort: 'created',
      expand: 'user',
    });
    messages = resultList.items;

    // Subscribe to changes in any messages record
    pb.collection('messages').subscribe('*', async ({ action, record }) => {
      if (action === 'create') {
        // Fetch associated user
        const user = await pb.collection('users').getOne(record.user);
        record.expand = { user };
        messages = [...messages, record];
      }
      if (action === 'delete') {
        messages = messages.filter((m) => m.id !== record.id);
      }
    });
  });

  // Unsubscribe from realtime messages

  async function sendMessage() {
    const data = {
      text: newMessage,
      user: $currentUser.id,
    };
    const createdMessage = await pb.collection('messages').create(data);
  }
</script>

<div class="messages">
  {#each messages as message (message.id)}
    <div class="msg">
      <img
        class="avatar"
        src={`https://avatars.dicebear.com/api/open-peeps/${message.expand?.user?.username}.svg`}
        alt="avatar"
        width="40px"
      />
      <div>
        <small>
          Sent by @{message.expand?.user?.username}
        </small>
        <p class="msg-text">{message.text}</p>
      </div>
    </div>
  {/each}
</div>

<form on:submit|preventDefault={sendMessage}>
  <input type="text" placeholder="Message" bind:value={newMessage} />
  <button type="submit">send</button>
</form>
