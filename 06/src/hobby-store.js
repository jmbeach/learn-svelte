import { writable } from 'svelte/store';

const hobbies = writable([])
const customStore = {
  subscribe: hobbies.subscribe,
  setHobbies: (items) => {hobbies.set(items)},
  addHobby: (hobby) => {
    hobbies.update(items => [...items, hobby])
  }
}
export default customStore;