import { writable } from 'svelte/store'
const cart = writable([
  {
    id: "pt1",
    title: "Test",
    price: 9.99,
  },
  {
    id: "pt2",
    title: "Test",
    price: 9.99,
  },
]);

export default cart;