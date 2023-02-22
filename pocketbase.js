import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

let currentUser;

pb.onAuthStateChanged((user) => {
  currentUser = user;
});

export { pb, currentUser };

