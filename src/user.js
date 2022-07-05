import GUN from 'gun';
import 'gun/sea';


import { writable } from 'svelte/store';

// Database
export const db = GUN();

  
// Gun User
export const user = db.user().recall({});

// Current User's username
export const username = writable('');
const roomno=writable('');

user.get('alias').on(v => username.set(v))

db.on('auth', async(event) => {
    const alias = await user.get('alias'); // username string
    username.set(alias);
    roomno.set('demo')
    console.log(`signed in as ${alias}`);
});