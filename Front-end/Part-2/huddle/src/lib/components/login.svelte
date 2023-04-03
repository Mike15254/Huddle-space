<script>
    import { currentUser, pb } from './pocketbase';

    async function login() {
      await pb.collection('users1').authWithPassword(username,password);
    }

</script>