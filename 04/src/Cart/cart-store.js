import { writable } from 'svelte/store'
const cart = writable([
  {
    id: "pt1",
    title: "Test 1",
    price: 9.99,
  },
  {
    id: "pt2",
    title: "Test 2",
    price: 9.99,
  },
]);

export default cart;